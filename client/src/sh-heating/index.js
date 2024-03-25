import * as React from "react";
import { useState, useContext } from "react";

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
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import HvacIcon from "@mui/icons-material/Hvac";

import HeatingContext from "../Components/contexts/HeatingContext";
import ModuleContext from "../Components/contexts/ModuleContext";
// import DeviceContext from "../Components/DeviceContext";

/**
 * HEATING FUNCTION
 */
const Heating = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  //keeps the context of which feature is being used among all components
  //   const { heatingStates, setHeatingStates } = useContext(HeatingContext);

  const { toggleActiveFeature } = useContext(ModuleContext);

  const features = [
    <Typography>ON/OFF SHH System</Typography>,
    <Typography>Thermostats</Typography>,
    <Typography>Zones</Typography>,
  ];

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <div id="tabs">
        <FormControlLabel
          className={activeContentIndex === 0 ? "active" : ""}
          control={
            <Switch
              checked={checked}
              onChange={(e) => {
                handleChange(e);
                setActiveContentIndex(0);
                toggleActiveFeature(4, 1);
              }}
              //   inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={checked == true ? "ON" : "OFF"}
        />
        <br />
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{ padding: "10px" }}
        >
          <Button
            color={activeContentIndex === 1 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => {
              setActiveContentIndex(1);
              toggleActiveFeature(4, 2);
              //   setHeatingStates(1);
            }}
          >
            <DeviceThermostatIcon />
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            variant="contained"
            //   size="large"
            color={activeContentIndex === 2 ? "secondary" : "primary"}
            onClick={() => {
              setActiveContentIndex(2);
              toggleActiveFeature(4, 3);
              //   setHeatingStates(2);
            }}
          >
            <HvacIcon />
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
