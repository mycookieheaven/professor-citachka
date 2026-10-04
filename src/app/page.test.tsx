import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("cookieheaven home screen", () => {
  it("is quote-led rather than a biography", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: "cookieheaven" })).toBeInTheDocument();
    expect(screen.getByText(/knowledge is the most valuable thing/i)).toBeInTheDocument();
    expect(screen.getByText(/trying to save cookie businesses/i)).toBeInTheDocument();
    expect(screen.queryByText(/portrait of melissa/i)).not.toBeInTheDocument();
  });
  it("keeps Professor Citachka separate", () => {
    render(<HomePage />);
    expect(screen.getByRole("link", { name: /enter professor citachka/i })).toHaveAttribute("href", "/professorcitachka");
  });
  it("shows the black pixel cat and cookie field", () => {
    const { container } = render(<HomePage />);
    expect(screen.getByRole("img", { name: /black pixel cat.*holding a cookie/i })).toHaveAttribute("src", "/images/pixel-cat-cookie.svg");
    expect(container.querySelectorAll(".pixel-cookie")).toHaveLength(8);
  });
});
