import {
  TextField,
  Button,
  FormGroup,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import DiceIcon from "@material-ui/icons/Casino";
import StarIcon from "@material-ui/icons/StarBorder";
import { useState } from "react";

interface Props {
  onSubmit: (value: string) => void;
}

const styles = makeStyles({
  button: {
    maxWidth: 100,
  },
  form: {
    margin: 20,
    alignItems: "center",
  },
  fields: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
  },
});

export default function TextInputRoll(props: Props) {
  const classes = styles();
  const [value, setValue] = useState("");

  return (
    <FormGroup className={classes.form} onSubmit={() => props.onSubmit(value)}>
      <TextField
        helperText="e.g. 1d20 + 6"
        variant="outlined"
        label="Roll"
        required
        onChange={(evt) => setValue(evt.target.value)}
        className={classes.fields}
        size="small"
      />
      <Button
        onClick={() => props.onSubmit(value)}
        color="primary"
        variant="contained"
        endIcon={<DiceIcon />}
        className={classes.button}
      >
        Roll
      </Button>
    </FormGroup>
  );
}
