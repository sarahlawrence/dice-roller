import { useState } from "react";
import RollInput from "./components/RollInput";
import parseRoll from "./utils/parse";
import { roll } from "./utils/dice";

function App() {
  const [input, setInput] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (evt: any) => {
    const input = evt.target.value;
    setInput(input);
  };

  const handleRoll = () => {
    const x = input;
    if (x) {
      const total = roll(parseRoll(x));
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
