import { afterEach, describe, expect, it, vi } from "vitest";
import { generateCrewBackground, generateCrewEquipment, generateCrewType, getValue, resolveDice } from "./api";
import { generators } from "./data";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("getValue", () => {
  it("should resolve arbitrarily-nested generators", () => {
    // @ts-expect-error tests
    generators["Gen 1"] = {
      dice: 6,
      title: "Table 1",
      table: [{ roll: "1-2", result: "Gen 1" }],
    };
    // @ts-expect-error tests
    generators["Gen 1"] = {
      dice: 6,
      title: "Table 1",
      table: [{ roll: "1-2", result: "Gen 2" }],
    };
    // @ts-expect-error tests
    generators["Gen 1"] = {
      dice: 6,
      title: "Table 1",
      table: [{ roll: "1-2", result: "Gen 3 result" }],
    };
    vi.spyOn(Math, "random").mockReturnValueOnce(0.1).mockReturnValueOnce(0.1).mockReturnValueOnce(0.1);

    // @ts-expect-error tests
    expect(getValue(1, generators["Gen 1"])).toBe("Gen 3 result");
  });
});

describe("resolveDice", () => {
  it("should resolve all dice in a string", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.9) // 1D6
      .mockReturnValueOnce(0.4) // First 2D10
      .mockReturnValueOnce(0.8); // Second 2D10

    expect(
      resolveDice(
        "Require 1D6 credits of surgery immediately, or suffer -2D10 permanent reduction to highest of Speed or Toughness.",
      ),
    ).toBe(
      "Require 6 credits of surgery immediately, or suffer -12 permanent reduction to highest of Speed or Toughness.",
    );
  });
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

    expect(generateCrewBackground()).toBe(["Tech Guild", "+1 Savvy", "+3 credits", "+1 High-tech Weapon"].join("\n"));
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
