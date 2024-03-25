// AddDevice.js
import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import Lights from "./core-components/Lights";

import DeviceContext from "../Components/DeviceContext";

const types = ["Light", "Door", "Window"];

const AddDevice = () => {
  const { deviceInfos, addDevices } = useContext(DeviceContext);
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
    console.log("Top %:", topSlider);
    console.log("Left %:", leftSlider);

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
        size="small"
        sx={{ my: 2 }}
      >
        Add Device
      </Button>
      <Dialog
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Add a New Device</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Name of Device</Typography>
          <FormControl fullWidth margin="normal" key="name">
            <TextField
              id="name"
              label="Device Name"
              variant="outlined"
              //   value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </FormControl>

          <Typography variant="h6">Type of Device</Typography>
          <FormControl fullWidth margin="normal" key="type">
            <InputLabel>Type</InputLabel>
            <Select
              //   value={inhabitantLocations[name]}
              defaultValue=""
              label="Type"
              onChange={(event) => {
                setType(event.target.value);
              }}
            >
              {types.map((typeOption) => (
                <MenuItem key={typeOption} value={typeOption}>
                  {typeOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <br />
          <Typography variant="h6">Device Position</Typography>
          <br />
          <br />
          <FormControl fullWidth margin="normal" key="position">
            <Typography>% from the top</Typography>
            <Slider
              aria-label="Top"
              defaultValue={30}
              valueLabelDisplay="auto"
              value={topSlider}
              onChange={handleTopSlider}
            />
            <Typography>% from the left</Typography>
            <br />
            <br />
            <Slider
              aria-label="Left"
              defaultValue={30}
              valueLabelDisplay="auto"
              value={leftSlider}
              onChange={handleLeftSlider}
            />
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

export default AddDevice;
// export { handleSave };
