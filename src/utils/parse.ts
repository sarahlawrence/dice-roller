import { Dice, Roll } from "../types";

export function parseDice(input: string): Dice[] {
  const matches = input.toLowerCase().match(/[\+\-]*\s*\d+d\d+/g); // looking for xdy

  if (matches) {
    return matches.map((m) => {
      const sign = m.includes("-") ? "-" : "+";
      const [count, sides] = m.replace("+", "").replace("-", "").split("d");
      return {
        count: parseInt(count),
        sides: parseInt(sides),
        sign: sign as any,
      };
    });
  }
  return [];
}

export function parseModifiers(input: string): number {
  const matches = input.toLowerCase().match(/[\+\-]\s*\d+(?!d)/g); // looking for +x or -x

  if (matches) {
    const cleaned = matches.map((m) => parseInt(m.replace(/\s/, ""))); // take out any whitespaces
    return cleaned.reduce((acc, current) => acc + current);
  }
  return 0;
}

export default function parseRoll(input: string): Roll {
  const dice = parseDice(input);
  const modifier = parseModifiers(input);
  return { dice, modifier };
}
