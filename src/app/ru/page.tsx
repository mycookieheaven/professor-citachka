import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { homepageData } from "@/lib/homepage";

export const metadata: Metadata = {
  title: "cookieheaven",
  description:
    "cookieheaven: небольшой архив творчества, фотографий, музыки и вопросов, за которыми стоит идти.",
  alternates: { canonical: "/ru", languages: { en: "/", es: "/es", ru: "/ru" } },
};

export default function Page() {
  return <HomeContent {...homepageData("ru")} />;
}
