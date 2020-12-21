import { calcRoll, rollDice } from "../../utils/roll";

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
    it("should return an array of dice rolls when count is NOT specified", () => {
      expect(rollDice(8)).toEqual([4]);
    });
  });
});
