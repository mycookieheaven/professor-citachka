import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/app/page";
import {programs} from '@/lib/programs';

describe("Professor Citachka dashboard", () => {
  it("computes the published regular level count without counting supplements", () => {
    render(<HomePage />);
    const levels=programs.reduce((sum,p)=>sum+p.levels.filter(l=>!l.supplemental).length,0);
    expect(screen.getByText(new RegExp(`Published curriculum: ${levels} regular levels across ${programs.length} subjects`))).toBeVisible();
  });
  it("welcomes Melissa and presents the next Russian lesson", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /good morning, melissa/i })).toBeInTheDocument();
    expect(screen.getByText(/your private university/i)).toBeInTheDocument();
    expect(screen.queryByText(/I usually feel loved loved by the world/)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /begin alphabet foundations/i })).toHaveAttribute(
      "href",
      "/subjects/russian/alphabet-foundations",
    );
  });

  it("opens and closes subject navigation on small screens", async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    const toggle = screen.getByRole("button", { name: /open navigation/i });
    await user.click(toggle);
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeVisible();

    await user.click(screen.getByRole("button", { name: /close navigation/i }));
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });

  it("gives every subject a meaningful visual symbol", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll("[data-subject-icon]")).toHaveLength(programs.length);
    expect(container.querySelector('[data-subject-icon="russian"]')).toBeInTheDocument();
    expect(container.querySelector('[data-subject-icon="neuroscience"]')).toBeInTheDocument();
    expect(container.querySelector('[data-subject-icon="veterinary-science"]')).toBeInTheDocument();
    expect(container.querySelector('[data-subject-icon="theology"]')).toBeInTheDocument();
    expect(container.querySelector('[data-subject-icon="finance"]')).toBeInTheDocument();
    expect(container.querySelector('[data-subject-icon="music"]')).toBeInTheDocument();
    expect(container.querySelector('[data-subject-icon="skincare"]')).toBeInTheDocument();
  });

  it("links Literature from the card and both navigation menus", async () => {
    const user = userEvent.setup();
    const { container } = render(<HomePage />);
    expect(container.querySelector('[data-subject-icon="literature"] svg')).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /literature/i }).filter(link => !link.classList.contains("resume-link"))).toHaveLength(2);
    await user.click(screen.getByRole("button", { name: /open navigation/i }));
    for (const link of screen.getAllByRole("link", { name: /literature/i }).filter(link => !link.classList.contains("resume-link"))) {
      expect(link).toHaveAttribute("href", "/subjects/literature");
    }
    expect(screen.getAllByRole("link", { name: /literature/i }).filter(link => !link.classList.contains("resume-link"))).toHaveLength(3);
  });

  it("renders layered celestial motion as decorative content", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll(".star-layer")).toHaveLength(3);
    expect(container.querySelector(".celestial-field")).toHaveAttribute("aria-hidden", "true");
  });
});
