import { useState } from "react";
import { roll } from "./utils/roll";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [sides, setSides] = useState(6);

  return (
    <div className="App">
      <p>Sides: {`${sides}`}</p>
      <input
        type="number"
        value={sides}
        onChange={(e) => setSides(parseInt(e.target.value))}
      />
      <p>{result ? `The current roll is ${result}` : "Click to roll!"}</p>
      <button onClick={() => setResult(roll(sides))}>ROLL</button>
    </div>
  );
}

export default App;
