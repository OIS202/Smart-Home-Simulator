// SimulationSidebar.js
import React from "react";
import { Box, Typography, Switch, Slider, Avatar } from "@mui/material";

const SimulationSidebar = () => {
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
        Wed Oct 21 2020
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        19:30:55
      </Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{ alignSelf: "flex-start" }}
      >
        Time speed
      </Typography>
      <Slider defaultValue={30} aria-label="Time speed" />
    </Box>
  );
};

export default SimulationSidebar;
