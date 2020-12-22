import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { StorageItem } from "types";
import { addItem, getItems, deleteItem } from "../utils/storage";
import CustomRollItem from "../components/CustomRoll";
import SaveRoll from "../components/SaveRoll";

export default function CustomRollsRoute() {
  const [savedRolls, setSavedRolls] = useState(getItems());
  const handleDelete = (item: StorageItem) => {
    deleteItem(item);
    setSavedRolls(getItems());
  };

  const handleSelect = (item: StorageItem) => {
    console.log("select");
  };

  const handleSubmitNewRoll = (name: string, value: string) => {
    addItem(name, value);
    setSavedRolls(getItems());
  };

  return (
    <div className="custom-rolls">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Add new custom roll
        </AccordionSummary>
        <AccordionDetails>
          <SaveRoll onSubmit={handleSubmitNewRoll} />
        </AccordionDetails>
      </Accordion>
      {savedRolls?.map((r, index) => (
        <CustomRollItem
          roll={r}
          key={`${r.key}-${index}`}
          onDelete={handleDelete}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
