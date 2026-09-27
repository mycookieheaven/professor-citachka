import { render, screen } from "@testing-library/react";
import RussianCurriculumIndex from "@/app/subjects/russian/page";

describe("Russian curriculum index", () => {
  it("links every weekly lesson from the six-unit Russian study map", () => {
    render(<RussianCurriculumIndex />);
    expect(screen.getByRole("heading", { name: /russian study map/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /week \d+:/i })).toHaveLength(24);
    expect(screen.getByRole("link", { name: /week 24: a2-ready review/i })).toHaveAttribute("href", "/subjects/russian/a2-ready-review");
  });
});
