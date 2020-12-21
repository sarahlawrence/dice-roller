export interface Dice {
  count: number;
  sides: number;
}

export interface Roll {
  dice: Dice[];
  modifier: number;
}
