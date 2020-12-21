import { useState } from "react";
import { roll } from "./utils/roll";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  return (
    <div className="App">
      <p>{result ? `The current roll is ${result}` : "Click to roll!"}</p>
      <button onClick={() => setResult(roll(6))}>ROLL</button>
    </div>
  );
}

export default App;
