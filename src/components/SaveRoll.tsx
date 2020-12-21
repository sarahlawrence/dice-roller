import { TextField } from "@material-ui/core";
import { useState } from "react";

interface Props {
  onSubmit: (name: string, value: string) => void;
}

export default function (props: Props) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="roll-input-container">
      <TextField
        placeholder="e.g. Dex Check"
        variant="outlined"
        label="Name"
        onChange={(evt) => setName(evt.target.value)}
      />
      <TextField
        placeholder="e.g. 1d20 + 6"
        variant="outlined"
        label="Roll"
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button onClick={() => props.onSubmit(name, value)}>SAVE</button>
    </div>
  );
}
