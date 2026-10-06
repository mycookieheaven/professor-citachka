import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

let pathname = "/";
vi.mock("next/navigation", () => ({ usePathname: () => pathname }));

import { SiteChrome } from "./SiteChrome";

beforeEach(() => {
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
});
afterEach(() => vi.unstubAllGlobals());

describe("SiteChrome", () => {
  it("keeps the study quote and preference controls off cookieheaven routes", () => {
    pathname = "/es";
    render(<SiteChrome />);
    expect(screen.queryByText(/usually loved by the world/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Reading focus" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Lively" })).not.toBeInTheDocument();
  });

  it("preserves study controls outside the personal home", () => {
    pathname = "/professorcitachka";
    render(<SiteChrome />);
    expect(screen.getByText(/usually loved by the world/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reading focus" })).toBeInTheDocument();
  });
});
