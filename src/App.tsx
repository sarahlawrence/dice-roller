import { useState } from "react";
import RollInput from "./components/RollInput";
import SaveRoll from "./components/SaveRoll";
import parseRoll from "./utils/parse";
import { roll } from "./utils/dice";
import { addItem, getItems, deleteItem } from "./utils/storage";
import { Roll, StorageItem } from "./types";

function App() {
  const [input, setInput] = useState<string | null>(null);
  const [value, setValue] = useState<number>(0);
  const [currentRoll, setCurrentRoll] = useState<Roll | null>(null);
  const [savedRolls, setSavedRolls] = useState(getItems());

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

  const handleSubmit = (name: string, value: string) => {
    addItem(name, value);
    setSavedRolls(getItems());
  };

  const handleDelete = (item: StorageItem) => {
    deleteItem(item);
    setSavedRolls(getItems());
  };

  const handleRollSaved = (value: string) => {
    setInput(value);
    handleRoll();
  };

  return (
    <div className="App">
      <RollInput onChange={handleChange} />
      <p>{value ? `The current roll is ${value}` : "Click to roll!"}</p>
      <button onClick={handleRoll}>ROLL</button>
      <SaveRoll onSubmit={handleSubmit} />
      {savedRolls?.map((r) => (
        <div key={r.key}>
          <p>Name: {r.friendlyName}</p>
          <p>Roll: {r.value}</p>
          <button onClick={() => handleDelete(r)}>Delete</button>
          <button onClick={() => handleRollSaved(r.value)}>Roll Me!</button>
        </div>
      ))}
    </div>
  );
}

export default App;
