import { createFileRoute } from "@tanstack/react-router";
import { ensureSchema, getSql, jsonError, verifyInitData } from "@/lib/tsunami.server";

export const Route = createFileRoute("/api/public/tsunami/score")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { initData?: string; score?: number };
        try {
          body = (await request.json()) as { initData?: string; score?: number };
        } catch {
          return jsonError("Invalid body");
        }

        let user;
        try {
          user = await verifyInitData(body.initData ?? "");
        } catch (error) {
          return jsonError((error as Error).message, 401);
        }

        const score = Math.max(0, Math.min(1_000_000, Math.floor(Number(body.score) || 0)));

        try {
          await ensureSchema();
          const sql = getSql();

          await sql`
            INSERT INTO players (telegram_id, username, first_name, referral_code, best_score, points)
            VALUES (${user.id}::bigint, ${user.name}, ${user.name}, ${user.id}, ${score}, ${score})
            ON CONFLICT (telegram_id) DO UPDATE SET
              username = EXCLUDED.username,
              best_score = GREATEST(players.best_score, EXCLUDED.best_score),
              points = GREATEST(players.points, EXCLUDED.best_score),
              updated_at = now()
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
          console.error("tsunami/score failed", error);
          return jsonError((error as Error).message, 500);
        }
      },
    },
  },
});
