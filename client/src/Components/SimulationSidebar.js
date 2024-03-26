import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Slider } from "@mui/material";

const SimulationSidebar = ({ houseId, userEmail }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeSpeed, setTimeSpeed] = useState(1); // 1x speed by default
  const [userRole, setUserRole] = useState('');
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    const fetchTimeAndUserDetails = async () => {
      try {
        // Fetching time by houseId
        const timeResponse = await axios.get(`http://localhost:8080/api/time/${houseId}`);
        const fetchedTime = new Date(timeResponse.data.time);
        if (!isNaN(fetchedTime.getTime())) {
          setCurrentTime(fetchedTime);
        } else {
          console.error("Invalid date received from backend", timeResponse.data.time);
        }

        // Fetching user details by email
        const userResponse = await axios.get(`http://localhost:8080/getUsersId`);
        if (userResponse.data) {
          setUserRole(userResponse.data.role);
          setUserLocation(userResponse.data.location);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchTimeAndUserDetails();
  }, [houseId, userEmail]); // Dependency array includes userEmail to refetch when it changes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000 * timeSpeed));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeSpeed]);

  const handleTimeSpeedChange = (event, newValue) => {
    setTimeSpeed(newValue);
  };

  const formattedDate = currentTime.toDateString();
  const formattedTime = currentTime.toLocaleTimeString();

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
      <Typography variant="h6" gutterBottom>Simulation Time</Typography>
      <Typography variant="caption" display="block" gutterBottom>{formattedDate}</Typography>
      <Typography variant="caption" display="block" gutterBottom>{formattedTime}</Typography>
      {userRole && <Typography>Role: {userRole}</Typography>}
      {userLocation && <Typography>Location: {userLocation}</Typography>}
      <Typography variant="caption" display="block" sx={{ alignSelf: "flex-start" }}>Time Speed</Typography>
      <Slider
        defaultValue={1}
        min={0.1}
        max={5}
        step={0.1}
        valueLabelDisplay="auto"
        aria-label="Time speed"
        onChange={handleTimeSpeedChange}
      />
    </Box>
  );
};

export default SimulationSidebar;
