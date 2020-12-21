import parseRoll, { parseDice, parseModifiers } from "../../utils/parse";

describe("Parsing Input Strings", () => {
  describe("parseDice()", () => {
    it("should return empty array when no matching dice", () => {
      expect(parseDice("foo")).toEqual([]);
    });

    it("should find one die", () => {
      expect(parseDice("1d6")).toEqual([
        {
          count: 1,
          sides: 6,
        },
      ]);
    });

    it("should find multiple dice", () => {
      expect(parseDice("1d6 + 2d8")).toEqual([
        {
          count: 1,
          sides: 6,
        },
        { count: 2, sides: 8 },
      ]);
    });

    it("should ignore modifiers", () => {
      expect(parseDice("1d6 - 7 + 2d8 + 6")).toEqual([
        {
          count: 1,
          sides: 6,
        },
        { count: 2, sides: 8 },
      ]);
    });

    it("should handle uppercase", () => {
      expect(parseDice("1D6")).toEqual([
        {
          count: 1,
          sides: 6,
        },
      ]);
    });

    it("should handle big rolls", () => {
      expect(parseDice("12d6")).toEqual([
        {
          count: 12,
          sides: 6,
        },
      ]);

      expect(parseDice("10d100")).toEqual([
        {
          count: 10,
          sides: 100,
        },
      ]);
    });
  });

  describe("parseModifiers()", () => {
    it("should return 0 when there no modifiers", () => {
      expect(parseModifiers("foo")).toEqual(0);
      expect(parseModifiers("1d6")).toEqual(0);
    });
    it("should return sum of all modifiers", () => {
      expect(parseModifiers("1d6 + 1")).toEqual(1);
      expect(parseModifiers("1d6 - 1")).toEqual(-1);
      expect(parseModifiers("1d6 - 1 + 2 + 3")).toEqual(4);
      expect(parseModifiers("1d6 - 1 + 1d6 + 3")).toEqual(2);
    });
    it("should accept random spacing", () => {
      expect(parseModifiers("1d6 - 1 + 1d6 +3")).toEqual(2);
      expect(parseModifiers("1d6 -1 + 1d6 +3")).toEqual(2);
      expect(parseModifiers("1d6+3")).toEqual(3);
    });
  });

  it("should breakdown a basic roll into dice notation", () => {
    expect(parseRoll("1d6")).toEqual({
      dice: [{ count: 1, sides: 6 }],
      modifier: 0,
    });
  });

  it("should breakdown a combo roll into dice notation", () => {
    expect(parseRoll("1d6 + 2d8")).toEqual({
      dice: [
        { count: 1, sides: 6 },
        { count: 2, sides: 8 },
      ],
      modifier: 0,
    });
  });

  it("should calculate modifiers", () => {
    expect(parseRoll("1d6 + 3 + 6 + 2d8 - 10")).toEqual({
      dice: [
        { count: 1, sides: 6 },
        { count: 2, sides: 8 },
      ],
      modifier: -1,
    });
  });
});
