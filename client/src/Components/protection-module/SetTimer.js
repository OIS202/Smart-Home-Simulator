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
import ProtectionContext from "../contexts/ProtectionContext";

const SetTimer = () => {
  const { deviceInfos, addDevices, isOn } = useContext(DeviceContext);
  const [deviceStates, toggleDeviceState, toggleAll] = isOn;

  const { alarm, countdown, timer } = useContext(ProtectionContext);
  const [alarmState, setAlarmState] = alarm;
  const [countdownState, setCountdownState] = countdown;
  const [timerState, setTimerState] = timer;

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
    setCountdownState(timerSlider);
    setTimerState(timerSlider);
  };

  const [timerSlider, setTimerSlider] = useState(120);

  const handleTimerSlider = (event, newTimerSlider) => {
    setTimerSlider(newTimerSlider);
  };

  return (
    <Box sx={{ p: 2 }}>
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
              defaultValue={3}
              min={10}
              max={500}
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
