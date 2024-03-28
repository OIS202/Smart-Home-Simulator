import React from "react";
import NavBar from "./Components/layout/NavBar";
import SimulationSidebar from "./Components/SimulationSidebar";
import SignUp from "./Components/SignUp";
import SimulationParamsForm from "./Components/SimulationParamsForm";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Tab,
  Tabs,
  Divider,
} from "@mui/material";

const SimulationParams = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <SimulationSidebar />

        <Box sx={{ width: "100%", height: "100vh", marginTop: "170px" }}>
          <SimulationParamsForm></SimulationParamsForm>
        </Box>
      </Box>
    </Box>
  );
};

export default SimulationParams;
