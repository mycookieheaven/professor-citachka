import manifest from "@/app/manifest";

describe("Professor Citachka mobile app manifest", () => {
  it("identifies the site as an installable standalone learning app", () => {
    const result = manifest();

    expect(result.name).toBe("Professor Citachka");
    expect(result.short_name).toBe("Citachka");
    expect(result.display).toBe("standalone");
    expect(result.start_url).toBe("/");
  });
});
