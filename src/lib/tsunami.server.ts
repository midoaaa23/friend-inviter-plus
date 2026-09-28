import { neon } from "@neondatabase/serverless";

export type TelegramUser = {
  id: string;
  name: string;
};

let schemaReady: Promise<void> | null = null;

export function getSql() {
  const url = process.env["NEON_DATABASE_URL"];
  if (!url) throw new Error("NEON_DATABASE_URL is not configured");
  return neon(url);
}

export async function ensureSchema() {
  if (!schemaReady) {
    const sql = getSql();
    schemaReady = (async () => {
      // Works with the existing Neon `players` table and adds what the game needs.
      await sql`
        CREATE TABLE IF NOT EXISTS players (
          id serial PRIMARY KEY,
          telegram_id bigint NOT NULL UNIQUE,
          first_name text,
          username text,
          points integer NOT NULL DEFAULT 0,
          referral_code text NOT NULL UNIQUE,
          referred_by_telegram_id bigint,
          created_at timestamptz NOT NULL DEFAULT now(),
          updated_at timestamptz NOT NULL DEFAULT now()
        )
      `;
      await sql`ALTER TABLE players ADD COLUMN IF NOT EXISTS coins bigint NOT NULL DEFAULT 0`;
      await sql`ALTER TABLE players ADD COLUMN IF NOT EXISTS best_score integer NOT NULL DEFAULT 0`;
      await sql`
        CREATE TABLE IF NOT EXISTS referrals (
          invitee_id text PRIMARY KEY,
          referrer_id text NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS players_best_score_idx ON players (best_score DESC)`;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  return schemaReady;
}


/** Validates Telegram WebApp initData (HMAC-SHA256) and returns the user. */
export async function verifyInitData(initData: string): Promise<TelegramUser> {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  if (!initData) throw new Error("Missing initData");

  const params = new URLSearchParams(initData);
  const hash = params.get("hash") ?? "";
  params.delete("hash");
  const dataCheckString = [...params.entries()]
    .map(([k, v]) => `${k}=${v}`)
    .sort()
    .join("\n");

  const enc = new TextEncoder();
  const secretKeyRaw = await crypto.subtle.importKey(
    "raw",
    enc.encode("WebAppData"),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const secret = await crypto.subtle.sign("HMAC", secretKeyRaw, enc.encode(token));
  const signKey = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", signKey, enc.encode(dataCheckString));
  const computed = [...new Uint8Array(signature)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (computed !== hash) throw new Error("Invalid Telegram signature");

  const authDate = Number(params.get("auth_date") ?? 0);
  if (!authDate || Date.now() / 1000 - authDate > 60 * 60 * 24) {
    throw new Error("Expired Telegram session");
  }

  const userRaw = params.get("user");
  if (!userRaw) throw new Error("Missing Telegram user");
  const user = JSON.parse(userRaw) as {
    id: number;
    username?: string;
    first_name?: string;
  };

  return {
    id: String(user.id),
    name: user.username || user.first_name || "Player",
  };
}

export const REFERRAL_REWARD = 500;

export function jsonError(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}
