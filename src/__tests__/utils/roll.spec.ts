import { roll, rollMulti } from "../../utils/roll";

describe("Rolling Dice", () => {
  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(0.5);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("roll()", () => {
    it("should return a dice roll", () => {
      expect(roll(6)).toEqual(3);
    });
  });

  describe("rollMulti()", () => {
    it("should return an array of dice rolls when count is specified", () => {
      expect(rollMulti(6, 3)).toEqual([3, 3, 3]);
    });
    it("should return an array of dice rolls when count is NOT specified", () => {
      expect(rollMulti(8)).toEqual([4]);
    });
  });
});
