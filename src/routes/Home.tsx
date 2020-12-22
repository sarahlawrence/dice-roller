import { useState } from "react";
import TextInputRoll from "../components/TextInputRoll";
import parseRoll from "../utils/parse";
import { printDice, roll } from "../utils/dice";
import { ExtendedTotal, Roll } from "types";

export default function HomeRoute() {
  // TODO maybe this should be useReducer
  const [currentRoll, setCurrentRoll] = useState<null | Roll>(null);
  const [currentExtended, setCurrentExtended] = useState<null | ExtendedTotal>(
    null
  );
  const [total, setTotal] = useState(-1);
  const handleRoll = (value: string) => {
    console.log("ROLLING:", value);
    const parsedRoll = parseRoll(value);
    setCurrentRoll(parsedRoll);
    const extendedTotal = roll(parsedRoll);
    setCurrentExtended(extendedTotal);
    setTotal(extendedTotal.total);
  };
  return (
    <div className="custom-rolls">
      <TextInputRoll onSubmit={handleRoll} />
      {currentRoll && <p>Current roll is: {printDice(currentRoll)}</p>}
      {total > -1 && <p>Total: {total}</p>}
    </div>
  );
}
