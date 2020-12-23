import { ExtendedTotal, Roll, DiceSetWithValues } from "../types";

export function calcRoll(sides: number): number {
  return Math.ceil(Math.random() * sides);
}

export function rollDice(sides: number, count: number): number[] {
  const results = [];
  for (let i = 0; i < count; i++) {
    const output = calcRoll(sides);
    results.push(output);
  }
  return results;
}

export default function roll({ dice, modifier }: Roll): ExtendedTotal {
  let runningTotal = 0;
  let diceSet: DiceSetWithValues[] = [];
  dice.forEach((current) => {
    const r = rollDice(current.sides, current.count);
    // add to running dice set
    diceSet.push({ ...current, values: r });

    const roll = r.reduce((a, c) => a + c);
    if (current.sign && current.sign === "-") {
      runningTotal -= roll;
    } else {
      runningTotal += roll;
    }
  });
  return { total: runningTotal + modifier, dice: diceSet };
}

// Prints a calculated representation of the roll
export function printDice(currentRoll: Roll): string {
  const dice = currentRoll.dice.map((d) => `${d.sign} ${d.count}d${d.sides}`);
  const friendlyMod =
    currentRoll.modifier < 0
      ? `${currentRoll.modifier}`
      : currentRoll.modifier === 0
      ? ""
      : `+${currentRoll.modifier}`;
  return `${dice.join(" ")} ${friendlyMod}`;
}

// Prints values of each die rolled in the roll
export function printExtendedRoll(roll: ExtendedTotal): string[] {
  return roll.dice.map(
    (d) => `${d.count}d${d.sides} = [${d.values.join(", ")}]`
  );
}
