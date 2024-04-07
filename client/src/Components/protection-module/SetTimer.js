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
  Checkbox,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import DeviceContext from "../contexts/DeviceContext";

const SetTimer = () => {
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
    handleCloseAddModal();
    return <></>;
  };

  const [timerSlider, setTimerSlider] = useState(5);

  const handleTimerSlider = (event, newTimerSlider) => {
    setTimerSlider(newTimerSlider);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
      <Button
        variant="contained"
        onClick={handleOpenAddModal}
        sx={{ margin: "10px" }}
      >
        Set Timer
      </Button>
      <Dialog
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Set a Timer</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal" key="position">
            <Typography>The Alarm Will Go Off After (minutes):</Typography>
            <br />
            <Slider
              aria-label="Top"
              defaultValue={5}
              min={1}
              max={10}
              valueLabelDisplay="auto"
              value={timerSlider}
              onChange={handleTimerSlider}
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

export default SetTimer;
// export { handleSave };
