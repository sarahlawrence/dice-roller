import { useState } from "react";

import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import StarFilledIcon from "@material-ui/icons/Star";

import TextInputRoll from "../components/TextInputRoll";
import parseRoll from "../utils/parse";
import roll, { printDice, printExtendedRoll } from "../utils/dice";
import { ExtendedTotal, Roll } from "types";
import SaveRoll from "components/SaveRoll";

export default function HomeRoute() {
  // TODO maybe this should be useReducer
  const [isSavePanelOpen, toggleSavePanel] = useState(false);
  const [currentRoll, setCurrentRoll] = useState<null | Roll>(null);
  const [currentExtended, setCurrentExtended] = useState<null | ExtendedTotal>(
    null
  );
  const [total, setTotal] = useState(-1);
  const handleRoll = (value: string) => {
    console.log("ROLLING:", value);
    const parsedRoll = parseRoll(value);
    setCurrentRoll(parsedRoll);
    const extendedTotal = roll(parsedRoll);
    setCurrentExtended(extendedTotal);
    setTotal(extendedTotal.total);
  };

  const handleSavePanelButtonPress = () => {
    toggleSavePanel(!isSavePanelOpen);
  };

  const handleSaveRoll = () => {
    // TODO: save the input.. this might actually have to be redux to share between routes.
  };

  return (
    <div className="custom-rolls">
      <TextInputRoll onSubmit={handleRoll} />
      <IconButton onClick={handleSavePanelButtonPress}>
        {isSavePanelOpen ? <StarFilledIcon /> : <StarIcon />}
      </IconButton>
      {/* TODO: make this a name only field..  */}
      {isSavePanelOpen && <SaveRoll onSubmit={handleSaveRoll} />}

      {/* TODO: THIS IS ALL THE DISPLAY STUFF THAT SHOULD BE MOVED! */}
      {currentRoll && <p>Current roll is: {printDice(currentRoll)}</p>}
      {total > -1 && <p>Total: {total}</p>}
      <p>Roll Breakdown:</p>
      {currentExtended && (
        <ul>
          {printExtendedRoll(currentExtended).map((x, index) => (
            <li key={`diceset-${index}`}>{x}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
