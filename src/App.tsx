import { useState } from "react";
import RollInput from "./components/RollInput";
import parseRoll from "./utils/parse";
import { roll } from "./utils/dice";
import { Roll } from "./types";

function App() {
  const [input, setInput] = useState<string | null>(null);
  const [value, setValue] = useState<number>(0);
  const [currentRoll, setCurrentRoll] = useState<Roll | null>(null);

  const handleChange = (evt: any) => {
    const input = evt.target.value;
    setInput(input);
  };

  const handleRoll = () => {
    const x = input;
    if (x) {
      const parsed = parseRoll(x);
      setCurrentRoll(parsed);
      const total = roll(parsed);
      setValue(total);
    }
  };

  return (
    <div className="App">
      <RollInput onChange={handleChange} />
      <p>{value ? `The current roll is ${value}` : "Click to roll!"}</p>
      <button onClick={handleRoll}>ROLL</button>
    </div>
  );
}

export default App;
