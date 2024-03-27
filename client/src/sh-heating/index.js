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
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import HvacIcon from "@mui/icons-material/Hvac";

import Thermostats from "../Components/heating-module/Thermostats";
import Zones from "../Components/heating-module/Zones";

import HeatingContext from "../Components/contexts/HeatingContext";
import ModuleContext from "../Components/contexts/ModuleContext";
// import DeviceContext from "../Components/DeviceContext";

/**
 * HEATING FUNCTION
 */
const Heating = () => {
  //   const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  //keeps the context of which feature is being used among all components
  //   const { heatingStates, setHeatingStates } = useContext(HeatingContext);

  const { getActiveFeature, toggleActiveFeature } = useContext(ModuleContext);

  const { simulation } = useContext(HeatingContext);
  const [simulationState, setSimulationState] = simulation;

  const activeFeature = getActiveFeature() - 1;

  const features = [
    <div />,
    <Thermostats source="module" />,
    <Zones source="module" />,
  ];

  //   const handleSwitch = (event) => {
  //     setSimulationState(event.target.checked);
  //     if (simulationState) {
  //       //   setActiveFeatureIndex(1);
  //       toggleActiveFeature(4, 2);
  //     } else {
  //       setActiveFeatureIndex(-1);
  //       toggleActiveFeature(4, 1);
  //     }
  //   };

  return (
    <>
      <div id="tabs">
        <Typography>Heating Simulation</Typography>
        <FormControlLabel
          //   className={activeFeatureIndex === 0 ? "active" : ""}
          control={
            <Switch
              checked={simulationState}
              //   onChange={(e) => {
              //   handleSwitch(e);
              //   }}
              onChange={() => {
                setSimulationState(!simulationState);
                // if (simulationState == true) {
                //   setActiveFeatureIndex(0);
                // }
              }}
              //   inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={simulationState === true ? "ON" : "OFF"}
        />
        <br />
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          disabled={!simulationState ? true : false}
          sx={{ padding: "10px" }}
        >
          <Button
            color={activeFeature === 1 ? "secondary" : "primary"}
            variant="contained"
            className={activeFeature === 1 ? "active" : ""}
            onClick={() => {
              //   setActiveFeatureIndex(1);
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
            color={activeFeature === 2 ? "secondary" : "primary"}
            className={activeFeature === 2 ? "active" : ""}
            onClick={() => {
              //   setActiveFeatureIndex(2);
              toggleActiveFeature(4, 3);
              //   setHeatingStates(2);
            }}
          >
            <HvacIcon />
          </Button>
        </ButtonGroup>
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

export default Heating;
