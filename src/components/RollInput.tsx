import { TextField } from "@material-ui/core";

interface Props {
  onChange: (evt: React.ChangeEvent) => void;
}

export default function (props: Props) {
  return (
    <div className="roll-input-container">
      <TextField
        placeholder="1d6"
        variant="outlined"
        onChange={props.onChange}
      />
    </div>
  );
}
