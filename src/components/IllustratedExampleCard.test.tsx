import { render, screen } from "@testing-library/react";
import { IllustratedExampleCard } from "@/components/IllustratedExampleCard";

describe("IllustratedExampleCard", () => {
  it("keeps a Russian example, Latin pronunciation, English meaning, and scene illustration together", () => {
    render(<IllustratedExampleCard russian="КОТ" latin="koht" english="male cat" scene="cat" />);
    expect(screen.getByText("КОТ")).toBeInTheDocument();
    expect(screen.getByText("koht")).toBeInTheDocument();
    expect(screen.getByText("male cat")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /illustration: cat/i })).toBeInTheDocument();
  });
});
