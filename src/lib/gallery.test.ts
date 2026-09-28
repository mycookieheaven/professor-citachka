import fs from "node:fs";
import path from "node:path";
import { readGallery, readPortrait } from "@/lib/gallery";

/*
 * The galleries read whatever is in public/art and public/photography at build
 * time. These tests create and remove a real file so the mechanism is exercised
 * rather than assumed — a folder that silently reads as empty would otherwise
 * look identical to a working one on a page with nothing in it yet.
 */

const ART = path.join(process.cwd(), "public", "art");
const IMAGES = path.join(process.cwd(), "public", "images");

function withTempImage(directory: string, name: string, run: () => void) {
  const file = path.join(directory, name);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(file, "");
  try {
    run();
  } finally {
    fs.rmSync(file, { force: true });
  }
}

describe("gallery reader", () => {
  it("picks up an image dropped into public/art", () => {
    withTempImage(ART, "zz-test-piece.png", () => {
      const images = readGallery("art");
      const found = images.find((image) => image.src === "/art/zz-test-piece.png");
      expect(found).toBeDefined();
      expect(found?.kind).toBe("art");
    });
  });

  it("derives readable alt text from the filename so no image is ever unlabelled", () => {
    withTempImage(ART, "zz-test-red-sunset.jpeg", () => {
      const found = readGallery("art").find(
        (image) => image.src === "/art/zz-test-red-sunset.jpeg",
      );
      expect(found?.alt).toBe("Zz test red sunset");
      expect(found?.alt.length).toBeGreaterThan(0);
    });
  });

  it("orders numbered files naturally rather than alphabetically", () => {
    withTempImage(ART, "zz2.png", () => {
      withTempImage(ART, "zz10.png", () => {
        const names = readGallery("art")
          .map((image) => image.src)
          .filter((src) => /zz\d+\.png$/.test(src));
        expect(names).toEqual(["/art/zz2.png", "/art/zz10.png"]);
      });
    });
  });

  it("ignores non-image files such as the folder placeholder", () => {
    const srcs = readGallery("art").map((image) => image.src);
    expect(srcs.some((src) => src.endsWith(".gitkeep"))).toBe(false);
  });

  it("returns nothing for a gallery that does not exist yet", () => {
    expect(readGallery("photography")).toEqual([]);
  });

  it("only reports a portrait when a portrait file is actually present", () => {
    const existing = ["portrait.jpg", "portrait.jpeg", "portrait.png", "portrait.webp", "portrait.avif"]
      .find((name) => fs.existsSync(path.join(IMAGES, name)));
    if (existing) {
      expect(readPortrait()).toEqual({ src: `/images/${existing}` });
    } else {
      expect(readPortrait()).toBeNull();
    }
  });
});
