import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Switch, Slider, Avatar } from "@mui/material";

const SimulationSidebar = ({ houseId }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeSpeed, setTimeSpeed] = useState(1); // 1x speed by default

  useEffect(() => {
    const fetchTimeByHouseId = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/time/65fcdf7132513f5cebd28837`);
        console.log("Time fetched from backend:", response.data.time); // Debugging log

        // Assuming the backend returns an ISO 8601 formatted string
        const fetchedTime = new Date(response.data.time);
        console.log("HEREEEE:  "+fetchedTime)
        if (isNaN(fetchedTime.getTime())) {
          console.error("Invalid date received from backend", response.data.time);
        } else {
          setCurrentTime(fetchedTime);
        }
      } catch (error) {
        console.error("Failed to fetch time", error);
      }
    };

    fetchTimeByHouseId();

    const interval = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000 * timeSpeed));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeSpeed, houseId]);

  const handleTimeSpeedChange = (event, newValue) => {
    setTimeSpeed(newValue);
  };

  // Format the current time to display
  const formattedDate =  currentTime.toDateString();
  const formattedTime =  currentTime.toLocaleTimeString();
  console.log(formattedTime)

  return (
    <Box
      sx={{
        width: 200,
        bgcolor: "grey.300", // Set to a grey color from the theme
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Simulation
      </Typography>
      <Switch checked />
      <Avatar sx={{ my: 2 }}>P</Avatar> {/* Placeholder for user avatar */}
      <Typography>Parent</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Location: Kitchen
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Outside Temp. 15°C
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {formattedDate}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {formattedTime}
      </Typography>
      <Typography variant="caption" display="block" sx={{ alignSelf: "flex-start" }}>
        Time speed
      </Typography>
      <Slider defaultValue={1} min={0.1} max={5} step={0.1} aria-label="Time speed" onChange={handleTimeSpeedChange} />
    </Box>
  );
};

export default SimulationSidebar;
