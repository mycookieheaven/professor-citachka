import { render } from "@testing-library/react";
import { SiteNavigation } from "@/components/SiteNavigation";

/*
 * The homepage tab used to read "sections" and sit over the hero. It is now
 * three lines on the left, which means the visible label is gone: the accessible
 * name is the only thing left telling anyone what the control does.
 */

describe("the homepage sections tab", () => {
  it("shows three lines instead of the word sections", () => {
    const { container } = render(<SiteNavigation />);
    const summary = container.querySelector(".home-side-tabs summary");
    expect(summary).not.toBeNull();
    expect(summary?.querySelectorAll(".home-side-tabs-bars span")).toHaveLength(3);
    expect(summary?.textContent).toBe("");
  });

  it("still tells a screen reader what it opens", () => {
    const { container } = render(<SiteNavigation />);
    expect(container.querySelector(".home-side-tabs summary")).toHaveAccessibleName(/sections/i);
    expect(container.querySelector(".home-side-tabs nav")).toHaveAccessibleName(/sections/i);
  });
});
