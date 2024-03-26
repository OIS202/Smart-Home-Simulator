import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Switch, Slider, Avatar } from "@mui/material";
import HeatingContext from "./contexts/HeatingContext"; // Adjust the import path as needed

const SimulationSidebar = ({ houseId }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { thermostat } = useContext(HeatingContext);
  const [heatingStates] = thermostat; // Accessing heating states from context
  const targetTemperature = heatingStates[0]; // Assuming the target temp is the first in your heating states

  // Initialize actual and outside temperatures to match the target temperature from HeatingContext
  const [actualTemperature, setActualTemperature] = useState(targetTemperature);
  const [outsideTemperature, setOutsideTemperature] = useState(targetTemperature); // New outside temperature state
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [timeSpeed, setTimeSpeed] = useState(1);

  useEffect(() => {
    if (!isSwitchOn) return;

    // Update time every second based on timeSpeed
    const timeInterval = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000 * timeSpeed));
    }, 1000 / timeSpeed);

    // Adjust actual temperature towards the target temperature every second based on timeSpeed
    const temperatureInterval = setInterval(() => {
      setActualTemperature(prevTemperature => {
        const tempDifference = targetTemperature - prevTemperature;
        if (tempDifference === 0) return prevTemperature; // Already at target temperature
        const adjustment = tempDifference > 0 ? 0.1 : -0.1;
        // Move actual temperature towards target, ensuring we don't overshoot
        return Math.abs(tempDifference) < Math.abs(adjustment) ? targetTemperature : prevTemperature + adjustment;
      });
    }, 1000 / timeSpeed);

    // Here you can add logic to change the outside temperature if needed
    // For now, it starts the same as target and actual temperatures and remains constant

    return () => {
      clearInterval(timeInterval);
      clearInterval(temperatureInterval);
    };
  }, [isSwitchOn, timeSpeed, targetTemperature]);

  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
  };

  const handleTimeSpeedChange = (event, newValue) => {
    setTimeSpeed(newValue);
  };

  const formattedDate = currentTime.toDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <Box sx={{ width: 200, bgcolor: "grey.300", padding: 2, display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto", }}>
      <Typography variant="h6" gutterBottom>Simulation</Typography>
      <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
      <Typography variant="caption" display="block" gutterBottom>
        Target Temperature: {targetTemperature}°C
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Actual Temperature: {actualTemperature.toFixed(1)}°C
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Outside Temperature: {outsideTemperature.toFixed(1)}°C
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>{formattedDate}</Typography>
      <Typography variant="caption" display="block" gutterBottom>{formattedTime}</Typography>
      <Typography variant="caption" display="block" sx={{ alignSelf: "flex-start" }}>Time speed</Typography>
      <Slider value={timeSpeed} onChange={handleTimeSpeedChange} defaultValue={1} min={0.1} max={5} step={0.1} aria-label="Time speed" />
    </Box>
  );
};

export default SimulationSidebar;
