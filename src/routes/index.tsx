import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tsunami Game — العب واربح العملات" },
      {
        name: "description",
        content:
          "لعبة Tsunami على تليجرام: اجمع العملات، شاهد إعلان لتربح محاولات، وادعُ أصدقاءك لتربحوا 500 عملة.",
      },
      { property: "og:title", content: "Tsunami Game — العب واربح العملات" },
      {
        property: "og:description",
        content: "العب Tsunami، تصدّر لوحة الصدارة، وادعُ أصدقاءك لتربحوا 500 عملة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/game/index.html" });
  },
  component: () => null,
});
