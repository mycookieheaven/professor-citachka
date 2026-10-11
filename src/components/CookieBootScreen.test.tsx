import { act, render } from "@testing-library/react";
import { CookieBootScreen } from "@/components/CookieBootScreen";

/*
 * The loading veil has one rule that matters more than looking nice: it must
 * never be able to trap a visitor behind a cat. boot.css gives it an exit that
 * fires on its own; this component only makes that exit happen sooner. These
 * tests hold both halves of that promise.
 */

function veil(): HTMLElement {
  const element = document.createElement("div");
  element.id = "cookie-boot";
  document.body.append(element);
  return element;
}

afterEach(() => {
  vi.useRealTimers();
  document.getElementById("cookie-boot")?.remove();
  Reflect.deleteProperty(document, "readyState");
});

describe("the loading veil", () => {
  it("dismisses itself once the page has loaded", () => {
    vi.useFakeTimers();
    const element = veil();
    render(<CookieBootScreen />);
    expect(element).not.toHaveClass("boot-done");
    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(element).toHaveClass("boot-done");
  });

  it("takes the veil out of the layout, not just fades it, if animations never run", () => {
    vi.useFakeTimers();
    const element = veil();
    render(<CookieBootScreen />);
    act(() => {
      vi.advanceTimersByTime(600);
    });
    /* A browser that runs no animation would leave an opacity-0 veil sitting on
       top of the whole site. display:none does not rely on the animation engine. */
    expect(element.style.display).toBe("none");
  });

  it("waits for a slow page rather than dismissing instantly", () => {
    vi.useFakeTimers();
    const element = veil();
    Object.defineProperty(document, "readyState", { value: "loading", configurable: true });
    const loaded = vi.fn();
    window.addEventListener("load", loaded, { once: true });
    render(<CookieBootScreen />);
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(element).not.toHaveClass("boot-done");
    act(() => {
      window.dispatchEvent(new Event("load"));
      vi.advanceTimersByTime(600);
    });
    expect(element).toHaveClass("boot-done");
    window.removeEventListener("load", loaded);
  });

  it("still lets go when the load event never arrives", () => {
    vi.useFakeTimers();
    const element = veil();
    Object.defineProperty(document, "readyState", { value: "loading", configurable: true });
    render(<CookieBootScreen />);
    act(() => {
      vi.advanceTimersByTime(4000);
    });
    expect(element).toHaveClass("boot-done");
  });

  it("says nothing and breaks nothing when there is no veil on the page", () => {
    const { container } = render(<CookieBootScreen />);
    expect(container).toBeEmptyDOMElement();
  });
});
