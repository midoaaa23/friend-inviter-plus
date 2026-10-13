import { createFileRoute } from "@tanstack/react-router";
import { ensureSchema, getSql, jsonError, verifyInitData, preflight, withCors } from "@/lib/tsunami.server";

/**
 * Adds the points of ONE finished round to the player's total.
 * Each round has a unique roundId, so retries never count the same round twice.
 */
export const Route = createFileRoute("/api/public/tsunami/round")({
  server: {
    handlers: {
      OPTIONS: preflight,
      POST: withCors(async ({ request }) => {
        let body: { initData?: string; score?: number; roundId?: string };
        try {
          body = (await request.json()) as typeof body;
        } catch {
          return jsonError("Invalid body");
        }

        let user;
        try {
          user = await verifyInitData(body.initData ?? "");
        } catch (error) {
          return jsonError((error as Error).message, 401);
        }

        const score = Math.max(0, Math.min(100_000, Math.floor(Number(body.score) || 0)));
        const roundId = String(body.roundId ?? "").slice(0, 64);
        if (!roundId) return jsonError("Missing roundId");

        try {
          await ensureSchema();
          const sql = getSql();

          await sql`
            INSERT INTO players (telegram_id, username, first_name, referral_code)
            VALUES (${user.id}::bigint, ${user.name}, ${user.name}, ${user.id})
            ON CONFLICT (telegram_id) DO UPDATE SET username = EXCLUDED.username
          `;

          await sql`
            WITH ins AS (
              INSERT INTO score_rounds (telegram_id, round_id, score)
              VALUES (${user.id}::bigint, ${roundId}, ${score})
              ON CONFLICT DO NOTHING
              RETURNING score
            )
            UPDATE players SET
              points = players.points + ins.score,
              best_score = GREATEST(players.best_score, ins.score),
              updated_at = now()
            FROM ins
            WHERE players.telegram_id = ${user.id}::bigint
          `;

          const rows = (await sql`
            SELECT coins, best_score, points FROM players WHERE telegram_id = ${user.id}::bigint
          `) as Array<{ coins: string; best_score: number; points: number }>;

          return Response.json({
            coins: Number(rows[0]?.coins ?? 0),
            bestScore: Number(rows[0]?.best_score ?? 0),
            points: Number(rows[0]?.points ?? 0),
          });
        } catch (error) {
          console.error("tsunami/round failed", error);
          return jsonError((error as Error).message, 500);
        }
      }),
    },
  },
});
