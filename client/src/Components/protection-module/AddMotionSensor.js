// AddDevice.js
import React, { useContext, useState } from "react";
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
} from "@mui/material";

import DeviceContext from "../contexts/DeviceContext";

const AddMotionSensor = () => {
  const { deviceInfos, addDevices, isOn } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSave = () => {
    console.log("Name of device:", name);
    console.log("Type of Device:", type);
    // console.log("Top %:", topSlider);
    // console.log("Left %:", leftSlider);

    handleCloseAddModal();
    console.log("Room number: ", room);
    toggleDeviceState(room);
    // addDevices({
    //   source: "add",
    //   name: { name },
    //   type: { type },
    //   top: { topSlider },
    //   left: { leftSlider },
    // });
    // return (
    //   <Lights
    // source="add"
    // name={name}
    // type={type}
    // top={topSlider}
    // left={leftSlider}
    // deviceInfos={deviceInfos}
    // addition={{
    //   source: "add", //DONT GIVE THE SOURCE. DOESNT MATTER
    //   name: { name },
    //   type: { type },
    //   top: { topSlider },
    //   left: { leftSlider },
    // }}
    // deviceStates={deviceStates}
    // toggleDeviceState={toggleDeviceState}
    //   />
    // );
  };

  const [room, setRoom] = useState(30);

  const handleChange = (event) => {
    setRoom(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
      <Button
        variant="contained"
        onClick={handleOpenAddModal}
        sx={{ margin: "10px" }}
      >
        Add Motion Sensor
      </Button>
      <Dialog
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Add a New Motion Sensor</DialogTitle>
        <DialogContent>
          {/* <Typography variant="h6">Select the Room</Typography> */}
          {/* <br /> */}
          <br />
          <FormControl fullWidth>
            <InputLabel>Room</InputLabel>
            <Select value={room} label="Room" onChange={handleChange}>
              <MenuItem value={24}>Kitchen</MenuItem>
              <MenuItem value={25}>Living Room</MenuItem>
              <MenuItem value={26}>Master Bedroom</MenuItem>
              <MenuItem value={27}>Kid Bedroom</MenuItem>
              <MenuItem value={28}>Bathroom</MenuItem>
              <MenuItem value={29}>Garage</MenuItem>
              {/* <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
              <MenuItem value={"Living Room"}>Living Room</MenuItem>
              <MenuItem value={"Kid Bedroom"}>Kid Bedroom</MenuItem>
              <MenuItem value={"Master Bedroom"}>Master Bedroom</MenuItem>
              <MenuItem value={"Bathroom"}>Bathroom</MenuItem>
              <MenuItem value={"Garage"}>Garage</MenuItem> */}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddModal}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddMotionSensor;
// export { handleSave };
