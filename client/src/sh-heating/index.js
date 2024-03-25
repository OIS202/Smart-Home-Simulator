import * as React from "react";
import { useState, useContext } from "react";

import {
  Button,
  ButtonGroup,
  Typography,
  // Box,
  // FormGroup,
  // FormControlLabel,
  // Checkbox,
  // Typography,
} from "@mui/material";

import { HeatingContext } from "../HomePage";
// import DeviceContext from "../Components/DeviceContext";

/**
 * HEATING FUNCTION
 */
const Heating = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const { heatingState, setHeatingState } = useContext(HeatingContext);

  const features = [
    <Typography>ON/OFF SHH System</Typography>,
    <Typography>Thermostats</Typography>,
    <Typography>Zones</Typography>,
  ];

  return (
    <div>
      <div id="tabs">
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{ padding: "10px" }}
        >
          <Button
            color={activeContentIndex === 0 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => {
              setActiveContentIndex(0);
              setHeatingState(0);
            }}
          >
            <Typography>Switch</Typography>
          </Button>
          <Button
            color={activeContentIndex === 1 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => {
              setActiveContentIndex(1);
              setHeatingState(1);
            }}
          >
            <Typography>Thermos</Typography>
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            variant="contained"
            //   size="large"
            color={activeContentIndex === 2 ? "secondary" : "primary"}
            onClick={() => {
              setActiveContentIndex(2);
              setHeatingState(2);
            }}
          >
            <Typography>Zones</Typography>
          </Button>
        </ButtonGroup>
        <div id="tab-content" style={{ display: "flex" }}>
          {features[activeContentIndex]}
        </div>
      </div>
    </div>
  );
};

export default Heating;
