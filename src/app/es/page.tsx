import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { homepageData } from "@/lib/homepage";

export const metadata: Metadata = {
  title: "Melissa Aguilera — cookieheaven.art",
  description:
    "El rincón propio de Melissa Aguilera en internet: su arte, su fotografía y su música, y Professor Citachka, la universidad que está construyendo para sí misma.",
  alternates: { canonical: "/es", languages: { en: "/", es: "/es", ru: "/ru" } },
};

export default function Page() {
  return <HomeContent {...homepageData("es")} />;
}
