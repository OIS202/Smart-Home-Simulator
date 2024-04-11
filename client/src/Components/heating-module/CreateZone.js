// AddDevice.js
import React, { useContext, useState } from "react";
import { logDeviceChange } from '../../utils/logDeviceChange';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Checkbox,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import Lights from "../core-module/Lights";

import DeviceContext from "../contexts/DeviceContext";
import HeatingContext from "../contexts/HeatingContext";

const types = ["Light", "Door", "Window"];

const CreateZone = () => {
  const { deviceInfos, addDevices, isOn } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const { thermostat } = useContext(HeatingContext);
  const [
    heatingStates,
    // toggleHeatingState,
    increaseTemperature,
    decreaseTemperature,
  ] = thermostat;

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSave = () => {
    console.log("Name of device:", name);
    console.log("Type of Device:", type);
    console.log("Top %:", topSlider);
    console.log("Left %:", leftSlider);
    logDeviceChange("Zone created", null, null);

    handleCloseAddModal();
    // addDevices({
    //   source: "add",
    //   name: { name },
    //   type: { type },
    //   top: { topSlider },
    //   left: { leftSlider },
    // });
    return (
      <Lights
        source="add"
        // name={name}
        // type={type}
        // top={topSlider}
        // left={leftSlider}
        // deviceInfos={deviceInfos}
        addition={{
          //   source: "add", //DONT GIVE THE SOURCE. DOESNT MATTER
          name: { name },
          type: { type },
          top: { topSlider },
          left: { leftSlider },
        }}
        // deviceStates={deviceStates}
        // toggleDeviceState={toggleDeviceState}
      />
    );
  };
  // return (
  //   <IconButton
  //     color="white"
  //     //   onClick={handleBtn(6)}
  //     sx={{
  //       position: "absolute",
  //       top: "37%",
  //       left: "33%",
  //       // transform: "translate(-50%, -50%)",
  //       backgroundColor: "red",
  //     }}
  //   >
  //     <LightbulbIcon />
  //   </IconButton>
  // );
  //   export { handleSave };

  //   const handleType = (typeChosen, event) => {};

  const [topSlider, setTopSlider] = useState(30);

  const handleTopSlider = (event, newTopSlider) => {
    setTopSlider(newTopSlider);
  };

  const [leftSlider, setLeftSlider] = useState(30);

  const handleLeftSlider = (event, newLeftSlider) => {
    setLeftSlider(newLeftSlider);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
      <Button
        variant="contained"
        onClick={handleOpenAddModal}
        sx={{ margin: "10px" }}
      >
        Create Zone
      </Button>
      <Dialog
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Create a New Zone</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Select the Rooms to Add to Your Zone
          </Typography>
          {/* <FormControl fullWidth margin="normal" key="name">
            <Checkbox
              id="name"
              label="Device Name"
              variant="outlined"
              //   value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </FormControl> */}
          <FormGroup sx={{ padding: "10px" }}>
            <FormControlLabel
              control={<Checkbox />}
              label={`Kitchen: ${heatingStates[0].temperature}°C`}
              checked={deviceStates[18]}
              // context={DeviceContext}
              onChange={() => {
                toggleDeviceState(18);
                // handleDeviceToggle("btn1")
                // handleChange
                // setDeviceState([0]);
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={`Living Room: ${heatingStates[1].temperature}°C`}
              checked={deviceStates[19]}
              onChange={() => {
                toggleDeviceState(19);
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={`Kid Bedroom: ${heatingStates[2].temperature}°C`}
              checked={deviceStates[20]}
              onChange={() => {
                toggleDeviceState(20);
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={`Master Bedroom: ${heatingStates[3].temperature}°C`}
              checked={deviceStates[21]}
              onChange={() => {
                toggleDeviceState(21);
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={`Bathroom: ${heatingStates[4].temperature}°C`}
              checked={deviceStates[22]}
              onChange={() => {
                toggleDeviceState(22);
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={`Garage: ${heatingStates[5].temperature}°C`}
              checked={deviceStates[23]}
              onChange={() => {
                toggleDeviceState(23);
              }}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddModal}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateZone;
// export { handleSave };
