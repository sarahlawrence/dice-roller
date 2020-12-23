import { ExtendedTotal, Roll } from "types";
import roll, {
  calcRoll,
  rollDice,
  printDice,
  printExtendedRoll,
} from "../../utils/dice";

describe("Rolling Dice", () => {
  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(0.5);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("calcRoll()", () => {
    it("should return a dice roll", () => {
      expect(calcRoll(6)).toEqual(3);
    });
  });

  describe("rollDice()", () => {
    it("should return an array of dice rolls when count is specified", () => {
      expect(rollDice(6, 3)).toEqual([3, 3, 3]);
    });
  });

  describe("roll()", () => {
    it("should produce extended roll results with values and total", () => {
      expect(
        roll({ dice: [{ sides: 6, count: 2, sign: "+" }], modifier: 2 })
      ).toEqual({
        dice: [{ sides: 6, count: 2, sign: "+", values: [3, 3] }],
        total: 8,
      });
    });
  });
});

describe("Printing Dice Results", () => {
  describe("printExtendedRoll()", () => {
    it("should be true", () => expect(true).toBe(true));
    it("should return an array of die rolls sorted by diceset", () => {
      const input: ExtendedTotal = {
        dice: [
          { sides: 6, count: 2, sign: "+", values: [1, 2] },
          { sides: 8, count: 1, sign: "+", values: [7] },
        ],
        total: 10,
      };
      const result = printExtendedRoll(input);
      expect(result).toEqual(["2d6 = [1, 2]", "1d8 = [7]"]);
    });
  });
});
