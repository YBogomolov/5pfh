import { afterEach, describe, expect, it, vi } from "vitest";
import { generateCrewBackground, generateCrewEquipment, generateCrewType } from "./api";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Crew Type", () => {
  it("should generate humans", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0.1);

    expect(generateCrewType()).toBe("Baseline Human");
  });

  it("should generate bots", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0.89);

    expect(generateCrewType()).toBe("Bot");
  });

  it("should generate aliens", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0.77).mockReturnValueOnce(0.42);

    expect(generateCrewType()).toBe("Soulless");
  });

  it("should generate strange characters", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0.99).mockReturnValueOnce(0.5);

    expect(generateCrewType()).toBe("Mutant");
  });
});

describe("Background", () => {
  it("should generate and format background", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.54) // table roll
      .mockReturnValueOnce(0.5); // 1D6 resolution

    expect(generateCrewBackground()).toBe(
      [
        "Background: Tech Guild",
        "Effect: +1 Savvy",
        "Resources: +3 credits",
        "Starting Rolls: +1 High-tech Weapon",
      ].join("\n"),
    );
  });
});

describe("Equipment", () => {
  it("should generate equipment", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.7)
      .mockReturnValueOnce(0.8);

    expect(generateCrewEquipment()).toBe(
      [
        "Military Rifle",
        "Infantry Laser",
        "Marksman's Rifle",
        "Machine Pistol",
        "Colony Rifle",
        "Hunting Rifle",
        "Med-patch",
        "Sonic Emitter",
      ].join(", "),
    );
  });
});
