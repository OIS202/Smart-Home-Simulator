import * as React from "react";
import { useContext } from "react";

import {
  Button,
  ButtonGroup,
  Typography,
  // Box,
  // FormGroup,
  FormControlLabel,
  Switch,
  // Checkbox,
  // Typography,
} from "@mui/material";

import ProtectionContext from "../Components/contexts/ProtectionContext";
import ModuleContext from "../Components/contexts/ModuleContext";
// import DeviceContext from "../Components/DeviceContext";

/**
 * PROTECTION FUNCTION
 */
const Protection = () => {
  const { getActiveFeature, toggleActiveFeature } = useContext(ModuleContext);

  const { away } = useContext(ProtectionContext);
  const [awayState, setAwayState] = away;

  const activeFeature = getActiveFeature() - 1;

  const features = [
    <div>button 1</div>,
    <div>button 2</div>,
    <div>button 3</div>,
  ];

  return (
    <>
      <div id="tabs">
        <Typography variant="h6">Away Mode</Typography>
        <FormControlLabel
          //   className={activeFeatureIndex === 0 ? "active" : ""}
          control={
            <Switch
              checked={awayState}
              //   onChange={(e) => {
              //   handleSwitch(e);
              //   }}
              onChange={() => {
                setAwayState(!awayState);
                // if (awayState == true) {
                //   setActiveFeatureIndex(0);
                // }
              }}
              //   inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={awayState === true ? "ON" : "OFF"}
        />
        <br />

        <div id="tab-content" style={{ display: "flex" }}>
          {/* {activeFeature == 1 || activeFeature == 2 */}
          {/* ?  */}
          {features[activeFeature]}
          {/* // : ""} */}
        </div>
      </div>
    </>
  );
};

export default Protection;
