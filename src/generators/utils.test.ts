import { afterEach, describe, expect, it, vi } from "vitest";
import { getValue, resolveDice } from "./utils";
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
        "Require 1D6+1 credits of surgery immediately, or suffer -2D10 permanent reduction to highest of Speed or Toughness.",
      ),
    ).toBe(
      "Require 7 credits of surgery immediately, or suffer -12 permanent reduction to highest of Speed or Toughness.",
    );
  });
});
