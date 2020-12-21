import { TextField, Button, FormGroup, makeStyles } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useState } from "react";

interface Props {
  onSubmit: (name: string, value: string) => void;
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

export default function (props: Props) {
  const classes = styles();
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  return (
    <FormGroup
      className={classes.form}
      onSubmit={() => props.onSubmit(name, value)}
    >
      <TextField
        helperText="e.g. Dex Save"
        variant="outlined"
        label="Name"
        required
        onChange={(evt) => setName(evt.target.value)}
        className={classes.fields}
        size="small"
      />
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
        onClick={() => props.onSubmit(name, value)}
        color="primary"
        variant="contained"
        endIcon={<BookmarkIcon />}
        className={classes.button}
      >
        Save
      </Button>
    </FormGroup>
  );
}
