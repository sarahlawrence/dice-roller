import { Roll } from "../types";

export function calcRoll(sides: number): number {
  return Math.ceil(Math.random() * sides);
}

// TODO: change this to a map to check what each roll was
export function rollDice(sides: number, count: number): number[] {
  const results = [];
  for (let i = 0; i < count; i++) {
    const output = calcRoll(sides);
    results.push(output);
  }
  return results;
}

export function roll({ dice, modifier }: Roll): number {
  let total = 0;
  dice.forEach((current) => {
    const r = rollDice(current.sides, current.count);
    const roll = r.reduce((a, c) => a + c);
    if (current.sign && current.sign === "-") {
      total -= roll;
    } else {
      total += roll;
    }
  });
  return total + modifier;
}

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
