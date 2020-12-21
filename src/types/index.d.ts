export interface Dice {
  count: number;
  sides: number;
}

export interface DiceRoll {
  dice: Dice[];
  modifier: number;
}
