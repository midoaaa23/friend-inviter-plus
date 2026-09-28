import { createFileRoute } from "@tanstack/react-router";
import { ensureSchema, getSql, jsonError } from "@/lib/tsunami.server";

export const Route = createFileRoute("/api/public/tsunami/leaderboard")({
  server: {
    handlers: {
      GET: async () => {
        try {
          await ensureSchema();
          const sql = getSql();
          const rows = (await sql`
            SELECT telegram_id,
                   COALESCE(NULLIF(username, ''), NULLIF(first_name, ''), 'Player') AS name,
                   best_score, coins
            FROM players
            ORDER BY best_score DESC, coins DESC
            LIMIT 50
          `) as Array<{ telegram_id: string; name: string; best_score: number; coins: string }>;

          return Response.json({
            players: rows.map((r) => ({
              id: String(r.telegram_id),
              name: r.name,
              score: Number(r.best_score),
              coins: Number(r.coins),
            })),
          });
        } catch (error) {
          console.error("tsunami/leaderboard failed", error);
          return jsonError((error as Error).message, 500);
        }
      },
    },
  },
});
