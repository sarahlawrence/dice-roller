export interface Dice {
  count: number;
  sides: number;
  sign: "+" | "-";
}

export interface Roll {
  dice: Dice[];
  modifier: number;
}
