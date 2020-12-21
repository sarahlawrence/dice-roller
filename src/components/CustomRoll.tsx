import { IconButton, Card, CardHeader, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { StorageItem } from "../types";

interface Props {
  roll: StorageItem;
  onDelete: (item: StorageItem) => void;
  onSelect: (item: StorageItem) => void;
}

const styles = makeStyles({
  item: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function (props: Props) {
  const classes = styles();
  const handleDelete = () => {
    props.onDelete(props.roll);
  };
  const handleSelect = () => {
    props.onSelect(props.roll);
  };

  return (
    <Card className={classes.item} onClick={handleSelect}>
      <CardHeader
        title={props.roll.friendlyName}
        subheader={props.roll.value}
        action={
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
      ></CardHeader>
    </Card>
  );
}
