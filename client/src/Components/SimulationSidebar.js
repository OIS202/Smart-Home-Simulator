import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Switch, Slider, Avatar } from "@mui/material";
import HeatingContext from "./contexts/HeatingContext"; // Ensure the path is correct for your project structure
import ProtectionContext from "./contexts/ProtectionContext"; // Ensure the path is correct for your project structure
import { logDeviceChange } from '../utils/logDeviceChange';
export default function SimulationSidebar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { thermostat, timeSpeed, setTimeSpeed } = useContext(HeatingContext);
  const [heatingStates] = thermostat;
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [outsideTemperature, setOutsideTemperature] = useState(10); // Example outside temperature
  const [actualTemperature, setActualTemperature] = useState(outsideTemperature);

  // Access away mode state and its setter from ProtectionContext
  const { away } = useContext(ProtectionContext);
  const [awayState, setAwayState] = away;

  // Function to calculate the average target temperature
  const calculateAverageTargetTemperature = () => {
    const totalTemperature = heatingStates.reduce(
      (acc, curr) => acc + curr.temperature,
      0
    );
    return heatingStates.length > 0 ? totalTemperature / heatingStates.length : 0;
  };

  // Calculate the average target temperature
  const averageTargetTemperature = calculateAverageTargetTemperature();

  useEffect(() => {
    if (!isSwitchOn) return;

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date(currentTime.getTime() + 1000 * timeSpeed));
    }, 1000 / timeSpeed);

    const temperatureInterval = setInterval(() => {
      setActualTemperature((prevTemperature) => {
        const tempDifference = averageTargetTemperature - prevTemperature;
        if (tempDifference === 0) return prevTemperature; // Already at target temperature
        const adjustment = tempDifference > 0 ? 0.1 * timeSpeed : -0.1 * timeSpeed;
        const newTemperature = prevTemperature + adjustment;
        // Avoid overshooting the target temperature
        if ((tempDifference > 0 && newTemperature >= averageTargetTemperature) ||
            (tempDifference < 0 && newTemperature <= averageTargetTemperature)) {
          return averageTargetTemperature;
        }

        // Automatically turn off away mode if actual temperature reaches 135°C
        if (newTemperature >= 135 && awayState === true) {
          setAwayState(false);
          logDeviceChange("Temperature exceeded 135 degrees so Away mode turned off Automatically",null,null);
        }

        return newTemperature;
      });
    }, 1000 / timeSpeed);

    return () => {
      clearInterval(timeInterval);
      clearInterval(temperatureInterval);
    };
  }, [isSwitchOn, timeSpeed, averageTargetTemperature, currentTime, awayState, setAwayState]);

  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
  };

  const handleTimeSpeedChange = (event, newValue) => {
    setTimeSpeed(newValue);
  };

  return (
    <Box
      sx={{
        width: 200,
        bgcolor: "grey.300",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>P</Avatar>
      <Typography variant="body1" gutterBottom>Parent 1</Typography>
      <Typography variant="h6" gutterBottom>Simulation Controls</Typography>
      <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
      <Typography variant="caption" display="block" gutterBottom>Simulation Time: {currentTime.toLocaleTimeString()}</Typography>
      <Typography variant="caption" display="block" gutterBottom>Average Target Temp: {averageTargetTemperature.toFixed(1)}°C</Typography>
      <Typography variant="caption" display="block" gutterBottom>Actual Temperature: {actualTemperature.toFixed(1)}°C</Typography>
      <Typography variant="caption" display="block" gutterBottom>Outside Temperature: {outsideTemperature.toFixed(1)}°C</Typography>
      <Typography variant="caption" display="block" sx={{ alignSelf: "flex-start" }}>Time Speed</Typography>
      <Slider
        value={timeSpeed}
        onChange={handleTimeSpeedChange}
        defaultValue={1}
        min={0.1}
        max={5}
        step={0.1}
        aria-label="Time speed"
        sx={{ width: "90%" }}
      />
    </Box>
  );
}
