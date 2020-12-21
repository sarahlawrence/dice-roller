export function calcRoll(sides: number): number {
  return Math.ceil(Math.random() * sides);
}

export function rollDice(sides: number, count: number = 1): number[] {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(calcRoll(sides));
  }
  return results;
}
