export function roll(sides: number): number {
  return Math.ceil(Math.random() * sides);
}

export function rollMulti(sides: number, count: number = 1): number[] {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(roll(sides));
  }
  return results;
}
