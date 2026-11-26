import type { NextConfig } from "next";

/**
 * The site is a set of finished pages: nothing here needs a server at request
 * time. So it is exported to plain files and published as files, which is what
 * GitHub Pages serves.
 *
 * Three consequences, all deliberate:
 *
 * - `output: "export"` writes `out/` instead of a server bundle. Any route that
 *   would need to run on every request cannot ship this way, so the one route
 *   handler in this repo is not part of the build (it was already answering
 *   "setup required", so nothing that works today stops working).
 * - `trailingSlash` makes every page a directory with an index.html, which is how
 *   a plain file server resolves `/photography` without rewriting anything.
 * - `images.unoptimized` because there is no image server to call. The gallery
 *   already ships correctly sized files of its own.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
