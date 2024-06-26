import * as React from "react";
import { useState, useContext } from "react";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

import { Button, ButtonGroup } from "@mui/material";

// import { CoreContext } from "../HomePage";
// import DeviceContext from "../Components/contexts/DeviceContext";
import ModuleContext from "../Components/contexts/ModuleContext";

import Doors from "../Components/core-module/Doors";
import Lights from "../Components/core-module/Lights";
import Windows from "../Components/core-module/Windows";

/**
 * CORE FUNCTION
 */
const Core = () => {
  // const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  //match layout with module feature (e.g. light control)
  // const { state, setState } = useContext(CoreContext);
  const { getActiveFeature, toggleActiveFeature } = useContext(ModuleContext);
  const activeFeature = getActiveFeature() - 1;
  //match on/off on layout and module feature
  // const { deviceStates, toggleDeviceState } = useContext(DeviceContext);

  const features = [
    <Lights
      source="module"
      // deviceStates={deviceStates}
      // toggleDeviceState={toggleDeviceState}
    />,

    <Doors
      source="module"
      // deviceStates={deviceStates}
      // toggleDeviceState={toggleDeviceState}
    />,
    <Windows
      source="module"
      // deviceStates={deviceStates}
      // toggleDeviceState={toggleDeviceState}
    />,
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
            color={activeFeature === 0 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeFeature === 0 ? "active" : ""}
            onClick={() => {
              // setActiveFeatureIndex(0);
              toggleActiveFeature(2, 1);
              // setState(0);
            }}
          >
            <LightbulbOutlinedIcon />
          </Button>
          <Button
            color={activeFeature === 1 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeFeature === 1 ? "active" : ""}
            onClick={() => {
              // setActiveFeatureIndex(1);
              toggleActiveFeature(2, 2);
              // setState(1);
            }}
          >
            <DoorFrontOutlinedIcon />
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            variant="contained"
            //   size="large"
            color={activeFeature === 2 ? "secondary" : "primary"}
            onClick={() => {
              // setActiveFeatureIndex(2);
              toggleActiveFeature(2, 3);
              // setState(2);
            }}
          >
            <WindowOutlinedIcon />
          </Button>
        </ButtonGroup>
        <div id="tab-content" style={{ display: "flex" }}>
          {features[activeFeature]}
        </div>
      </div>
    </div>
  );
};

export default Core;

// const { deviceState, setDeviceState } = useContext(DeviceContext);

// const { toggleDevice } = useDeviceContext();

// const handleDeviceToggle = (device) => {
//   toggleDevice(device);
// };

// const handleBtn = (btnId) => (e) => {
//   e.preventDefault();
//   setDeviceState((deviceState) => ({
//     ...deviceState,
//     [btnId]: deviceState[btnId],
//   }));
// };

// function set(num) {
//   setState(num);
// }

// const [stateBtn, setStateBtm] = useState({
//   Kitchen: true,
//   Livingroom: true,
//   Bathroom: false,
// });

// const handleChange = (event) => {
//   setState({
//     ...stateBtn,
//     [event.target.name]: event.target.checked,
//   });
// };

// const ToggleButton = ({ index }) => {
// const { deviceStates, toggleDeviceState } = useContext(DeviceContext);
// const isOn = buttonStates[index];
// return (
//   <button onClick={() => toggleDeviceState(index)}>
//     {isOn ? "On" : "Off"}
//   </button>
// );
// };

// export default ToggleButton;

// function Lights() {
//   return (
//     <FormGroup sx={{ padding: "10px" }}>
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Kitchen"
//         checked={deviceStates[0]}
//         // context={DeviceContext}
//         onChange={() => {
//           toggleDeviceState(0);
//           // handleDeviceToggle("btn1")
//           // handleChange
//           // setDeviceState([0]);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Living Room"
//         checked={deviceStates[1]}
//         onChange={() => {
//           toggleDeviceState(1);
//           // setDeviceState([1]);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Kid Bedroom"
//         checked={deviceStates[2]}
//         onChange={() => {
//           toggleDeviceState(2);
//           // setDeviceState([2]);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Master Bedroom"
//         checked={deviceStates[4]}
//         onChange={() => {
//           toggleDeviceState(4);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Bathroom"
//         checked={deviceStates[5]}
//         onChange={() => {
//           toggleDeviceState(5);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Garage"
//         checked={deviceStates[3]}
//         onChange={() => {
//           toggleDeviceState(3);
//           // setDeviceState([3]);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Backyard"
//         checked={deviceStates[6]}
//         onChange={() => {
//           toggleDeviceState(6);
//         }}
//       />
//       <br />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="All Lights"
//         checked={deviceStates[7]}
//         onChange={() => {
//           // all(deviceStates);
//           toggleDeviceState(7);
//         }}
//       />
//     </FormGroup>
//   );
// }
// function all(allStates) {
//   for (let i = 0; i < allStates.length; i++) {
//     allStates[i] = true;
//   }

// allStates.forEach((state) => {
//   return (state = true);
// });
// allStates[0] = true;
// }
// function Doors() {
//   return (
//     <FormGroup sx={{ padding: "10px" }}>
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Front Door"
//         checked={deviceStates[8]}
//         onChange={() => {
//           toggleDeviceState(8);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Back Door"
//         checked={deviceStates[9]}
//         onChange={() => {
//           toggleDeviceState(9);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Garage Door"
//         checked={deviceStates[10]}
//         onChange={() => {
//           toggleDeviceState(10);
//         }}
//       />
//       <br />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="All Doors"
//         checked={deviceStates[11]}
//         onChange={() => {
//           toggleDeviceState(11);
//         }}
//       />
//     </FormGroup>
//   );
// }

// function Windows() {
//   return (
//     //can eventually add children in form group
//     <FormGroup sx={{ padding: "10px" }}>
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Master Bedroom"
//         checked={deviceStates[12]}
//         onChange={() => {
//           toggleDeviceState(12);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Kid Bedroom"
//         checked={deviceStates[13]}
//         onChange={() => {
//           toggleDeviceState(13);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Living Room"
//         checked={deviceStates[14]}
//         onChange={() => {
//           toggleDeviceState(14);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Kitchen"
//         checked={deviceStates[15]}
//         onChange={() => {
//           toggleDeviceState(15);
//         }}
//       />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="Garage"
//         checked={deviceStates[16]}
//         onChange={() => {
//           toggleDeviceState(16);
//         }}
//       />
//       <br />
//       <FormControlLabel
//         control={<Checkbox />}
//         label="All Windows"
//         checked={deviceStates[17]}
//         onChange={() => {
//           toggleDeviceState(17);
//         }}
//       />
//     </FormGroup>
//   );
// }
