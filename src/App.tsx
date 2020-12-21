import { useState } from "react";
import { calcRoll } from "./utils/dice";
import RollInput from "./components/RollInput";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [sides, setSides] = useState(6);

  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setSides(value > 0 ? value : 1);
  };

  return (
    <div className="App">
      <p>Sides: {`${sides}`}</p>
      <RollInput onChange={handleChange} />
      <p>{result ? `The current roll is ${result}` : "Click to roll!"}</p>
      <button onClick={() => setResult(calcRoll(sides))}>ROLL</button>
    </div>
  );
}

export default App;
