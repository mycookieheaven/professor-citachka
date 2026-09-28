import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { homepageData } from "@/lib/homepage";

export const metadata: Metadata = {
  title: "Мелисса Агилера — cookieheaven.art",
  description:
    "Собственный уголок Мелиссы Агилеры в интернете: её творчество, фотография и музыка, и «Профессор Цитачка» — университет, который она строит для себя.",
  alternates: { canonical: "/ru", languages: { en: "/", es: "/es", ru: "/ru" } },
};

export default function Page() {
  return <HomeContent {...homepageData("ru")} />;
}
