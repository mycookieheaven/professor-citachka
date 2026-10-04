import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { homepageData } from "@/lib/homepage";

export const metadata: Metadata = {
  title: "cookieheaven",
  description:
    "cookieheaven: un pequeño archivo de arte, fotografías, música y preguntas que vale la pena seguir.",
  alternates: { canonical: "/es", languages: { en: "/", es: "/es", ru: "/ru" } },
};

export default function Page() {
  return <HomeContent {...homepageData("es")} />;
}
