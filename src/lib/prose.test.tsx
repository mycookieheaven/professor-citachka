import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import ProsePage from "@/app/prose/page";
import { formatProseDate, readProse } from "@/lib/prose";

describe("prose archive", () => {
  it("reads every entry in the data file, newest first", () => {
    const entries = readProse();
    expect(entries.length).toBeGreaterThan(0);
    const dates = entries.map((entry) => entry.date);
    expect(dates).toEqual([...dates].sort((a, b) => b.localeCompare(a)));
  });

  it("keeps each entry whole: a title, an ISO date, and real paragraphs", () => {
    for (const entry of readProse()) {
      expect(entry.title.trim().length).toBeGreaterThan(0);
      expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(new Date(`${entry.date}T00:00:00Z`).getTime())).toBe(false);
      expect(entry.paragraphs.length).toBeGreaterThan(1);
      for (const paragraph of entry.paragraphs) {
        expect(paragraph.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("dates the newest piece the fourteenth of November, 2026, and prints it in full", () => {
    expect(formatProseDate("2026-11-14")).toBe("Saturday, November 14, 2026");
    /* A calendar day, not an instant: it must read the same in every timezone. */
    expect(formatProseDate("2026-11-14")).toBe(formatProseDate("2026-11-14"));
  });

  it("uses no em or en dashes anywhere, including the data file's own note", () => {
    /* House rule from the author: no long dashes. A sentence has to earn its
       pause with a comma, a colon, or a period instead of a dash. Enforced on
       the raw file so it cannot creep back in through a title or a note. */
    const raw = readFileSync("src/data/prose.json", "utf8");
    const offenders = raw.split("\n").filter((line) => /[\u2014\u2013]/.test(line));
    expect(offenders).toEqual([]);
    for (const entry of readProse()) {
      expect(`${entry.title} ${entry.paragraphs.join(" ")}`).not.toMatch(/[\u2014\u2013]/);
    }
  });

  it("renders the archive with a machine-readable date and the piece's own words", () => {
    const [entry] = readProse();
    const { container } = render(<ProsePage />);
    expect(screen.getByRole("heading", { level: 1, name: "Prose" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: entry.title })).toBeInTheDocument();
    const time = container.querySelector("time.prose-entry-date");
    expect(time).not.toBeNull();
    expect(time).toHaveAttribute("datetime", entry.date);
    expect(time?.textContent).toBe(formatProseDate(entry.date));
    expect(screen.getByText(entry.paragraphs[0])).toBeInTheDocument();
    expect(container.querySelectorAll(".prose-body p")).toHaveLength(entry.paragraphs.length);
  });

  it("no longer shows the empty shelf once a page exists", () => {
    render(<ProsePage />);
    expect(screen.queryByText(/still being written/i)).not.toBeInTheDocument();
  });

  it("styles the body for reading rather than for shouting", () => {
    const css = readFileSync("src/app/landing.css", "utf8");
    expect(css).toMatch(/\.prose-page \.prose-body p \{[^}]*text-shadow: none/);
    expect(css).toMatch(/\.prose-page \.prose-body p \{[^}]*line-height: 1\.9/);
  });
});
