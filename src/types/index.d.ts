export interface Dice {
  count: number;
  sides: number;
  sign: "+" | "-";
}

export interface Roll {
  dice: Dice[];
  modifier: number;
}

export interface StorageItem {
  key: string;
  friendlyName: string;
  value: string;
}

export interface Store {
  dice: StorageItem[];
}
