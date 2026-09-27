import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./learning.css";
import "./motion.css";
import "./unit-path.css";
import {StudyAtmosphere} from "@/components/StudyAtmosphere";
import {StudyCelebration} from "@/components/StudyCelebration";
import { PinkGlitterCursor } from "@/components/PinkGlitterCursor";
import {QuoteBanner} from "@/components/Brand";
import {SiteNavigation} from "@/components/SiteNavigation";
import {ReadAloudControls} from "@/components/ReadAloudControls";

const display = Nunito({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800", "900"],
});

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Professor Citachka",
  description: "Melissa's private university for disciplined, lifelong learning.",
  icons: {icon:[{url:"/favicon.ico"},{url:"/icons/panda-32.png",type:"image/png",sizes:"32x32"}],apple:[{url:"/icons/panda-180.png",sizes:"180x180"}]},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-motion="calm">
      <body className={`${display.variable} ${body.variable}`}>
        <QuoteBanner />
        <SiteNavigation />
        <StudyAtmosphere />
        <StudyCelebration />
        <PinkGlitterCursor />
        {children}
        <ReadAloudControls targetSelector=".learning-article,.lesson-article" />
      </body>
    </html>
  );
}
