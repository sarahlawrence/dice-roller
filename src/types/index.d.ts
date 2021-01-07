export interface DiceSet {
  count: number;
  sides: number;
  sign: "+" | "-";
}

export interface DiceSetWithValues extends DiceSet {
  values: number[];
}

export interface Roll {
  dice: DiceSet[];
  modifier: number;
}

export interface ExtendedTotal {
  total: number;
  dice: DiceSetWithValues[];
}

export interface StorageItem {
  key: string;
  friendlyName: string;
  value: string;
}

export interface Store {
  dice: StorageItem[];
}
