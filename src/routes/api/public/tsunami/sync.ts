import { createFileRoute } from "@tanstack/react-router";
import {
  REFERRAL_REWARD,
  ensureSchema,
  getSql,
  isDevId,
  jsonError,
  verifyInitData,
} from "@/lib/tsunami.server";

export const Route = createFileRoute("/api/public/tsunami/sync")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { initData?: string; ref?: string };
        try {
          body = (await request.json()) as { initData?: string; ref?: string };
        } catch {
          return cors(jsonError("Invalid body");
        }

        let user;
        try {
          user = await verifyInitData(body.initData ?? "");
        } catch (error) {
          return cors(jsonError((error as Error).message, 401);
        }

        try {
          await ensureSchema();
          const sql = getSql();

          const existing = (await sql`
            SELECT telegram_id FROM players WHERE telegram_id = ${user.id}::bigint
          `) as Array<{ telegram_id: string }>;

          let referralRewarded = false;

          if (existing.length === 0) {
            const ref = (body.ref ?? "").replace(/[^0-9]/g, "");
            let referrerId: string | null = null;

            if (ref && ref !== user.id) {
              const referrer = (await sql`
                SELECT telegram_id FROM players WHERE telegram_id = ${ref}::bigint
              `) as Array<{ telegram_id: string }>;
              if (referrer.length > 0) referrerId = ref;
            }

            await sql`
              INSERT INTO players (telegram_id, username, first_name, referral_code, coins, referred_by_telegram_id)
              VALUES (
                ${user.id}::bigint, ${user.name}, ${user.name}, ${user.id},
                ${referrerId ? REFERRAL_REWARD : 0},
                ${referrerId ? Number(referrerId) : null}
              )
              ON CONFLICT (telegram_id) DO NOTHING
            `;

            if (referrerId) {
              const inserted = (await sql`
                INSERT INTO referrals (invitee_id, referrer_id)
                VALUES (${user.id}, ${referrerId})
                ON CONFLICT (invitee_id) DO NOTHING
                RETURNING invitee_id
              `) as Array<{ invitee_id: string }>;

              if (inserted.length > 0) {
                await sql`
                  UPDATE players
                  SET coins = coins + ${REFERRAL_REWARD}, updated_at = now()
                  WHERE telegram_id = ${referrerId}::bigint
                `;
                referralRewarded = true;
              }
            }
          } else {
            await sql`
              UPDATE players
              SET username = ${user.name},
                  first_name = COALESCE(NULLIF(first_name, ''), ${user.name}),
                  updated_at = now()
              WHERE telegram_id = ${user.id}::bigint
            `;
          }


          const dev = isDevId(user.id);
          if (dev) {
            await sql`UPDATE players SET is_dev = true WHERE telegram_id = ${user.id}::bigint`;
          }

          const rows = (await sql`
            SELECT p.coins, p.best_score, p.points,
              (SELECT count(*) FROM referrals r WHERE r.referrer_id = ${user.id}) AS invites
            FROM players p WHERE p.telegram_id = ${user.id}::bigint
          `) as Array<{ coins: string; best_score: number; points: number; invites: string }>;

          const row = rows[0];
          return cors(Response.json({
            id: user.id,
            name: user.name,
            coins: Number(row?.coins ?? 0),
            bestScore: Number(row?.best_score ?? 0),
            points: Number(row?.points ?? 0),
            isDev: dev,
            invites: Number(row?.invites ?? 0),
            referralRewarded,
          });
        } catch (error) {
          console.error("tsunami/sync failed", error);
          return cors(jsonError((error as Error).message, 500);
        }
      },
    },
  },
});
