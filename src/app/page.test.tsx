import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("cookieheaven home screen", () => {
  it("is quote-led rather than a biography", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: "COOKIE HEAVEN" })).toBeInTheDocument();
    expect(screen.getByText(/knowledge is the most valuable thing/i)).toBeInTheDocument();
    expect(screen.getByText(/trying to save cookie businesses/i)).toBeInTheDocument();
    expect(screen.getByText(/usually loved by the world/i)).toHaveClass("home-floating-quote");
    expect(screen.queryByText(/portrait of melissa/i)).not.toBeInTheDocument();
  });
  it("keeps the top screen personal and gives Instagram its own safe link", () => {
    render(<HomePage />);
    const instagram = screen.getByRole("link", { name: /@cookieswpeanutbutter/i });
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/cookieswpeanutbutter/");
    expect(screen.queryByText(/professor citachka/i)).not.toBeInTheDocument();
  });
  it("shows the black pixel cat and cookie field", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector('img[src="/images/pixel-cat-cookie.svg"]')).toBeInTheDocument();
    expect(container.querySelectorAll(".pixel-cookie")).toHaveLength(28);
  });
});
