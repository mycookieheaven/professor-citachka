import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans, Rubik_Bubbles, Literata } from "next/font/google";
import "./globals.css";
import "./cat.css";
import "./boot.css";
import "./learning.css";
import "./motion.css";
import "./unit-path.css";
import "./landing.css";
import {CookieBootScreen} from "@/components/CookieBootScreen";
import {StudyCelebration} from "@/components/StudyCelebration";
import { PinkGlitterCursor } from "@/components/PinkGlitterCursor";
import { SiteChrome } from "@/components/SiteChrome";
import {SiteNavigation} from "@/components/SiteNavigation";
import {ReadAloudControls} from "@/components/ReadAloudControls";

/* The display face is a high-contrast serif rather than a rounded sans: at the
   size the title runs, a serif's thick-to-thin stroke is what reads as composed
   instead of shouted. It still carries Cyrillic, because the Russian lessons use
   it for their headings too. Left as a variable font so every weight the sheets
   ask for (400 through 900) comes from one file. */
const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

/* The homepage wordmark, and nothing else, wears Rubik Bubbles. It is a Latin
   only display face with a single weight, which is fine here: the two words are
   always "COOKIE HEAVEN" in every locale, and the ink outline in landing.css
   supplies the weight the family does not have. Keeping it as a separate
   variable means the serif still owns every heading inside the site. */
const title = Rubik_Bubbles({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "400",
});

/* The reading face for the cookieheaven pages, and only those pages. Literata
   is a serif drawn for long-form reading on screens, with Cyrillic in the same
   hand, so the Russian homepage needs no fallback. It is a third variable rather
   than a change to --font-body because the Professor Citachka lessons keep
   Nunito Sans: the study surface must not inherit a serif because the personal
   surface wanted one. */
const site = Literata({
  variable: "--font-site",
  subsets: ["latin", "cyrillic"],
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cookieheaven.art"),
  /* A lesson names itself first; the site signs it. The homepage keeps its own
     title, so a browser tab at the front door still says whose house this is. */
  title: { default: "Professor Citachka", template: "%s · Cookie Heaven" },
  description: "Melissa's private university for disciplined, lifelong learning.",
  /* Without these, every link to this site, in a message, a bio, or a forum,
     arrived as a bare grey URL with no title and no picture, which is a link
     almost nobody clicks. The card is one shared image; the words change per page. */
  openGraph: {
    type: "website",
    siteName: "cookieheaven",
    title: "Cookie Heaven",
    description: "Art, photography, music, and a private university, by Melissa Aguilera.",
    url: "/",
    images: [
      {
        url: "/og/cookieheaven.png",
        width: 1200,
        height: 630,
        alt: "Cookie Heaven: art, photography, music, and a private university, by Melissa Aguilera.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Heaven",
    description: "Art, photography, music, and a private university, by Melissa Aguilera.",
    images: ["/og/cookieheaven.png"],
  },
  icons: {icon:[{url:"/favicon.ico"},{url:"/icons/panda-32.png",type:"image/png",sizes:"32x32"}],apple:[{url:"/icons/panda-180.png",sizes:"180x180"}]},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-motion="calm">
      <body className={`${display.variable} ${body.variable} ${title.variable} ${site.variable}`}>
        {/* Rendered by the server so it is the first thing painted, and hidden
            again by its own animation even if no script ever runs. */}
        <div id="cookie-boot" aria-hidden="true">
          <span className="cat-sprite boot-cat" />
          <span className="boot-word">cookieheaven</span>
        </div>
        <CookieBootScreen />
        <SiteChrome />
        <SiteNavigation />
        <StudyCelebration />
        <PinkGlitterCursor />
        {children}
        <ReadAloudControls targetSelector=".learning-article,.lesson-article" />
      </body>
    </html>
  );
}
