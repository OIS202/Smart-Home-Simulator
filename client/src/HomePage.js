// HomePage.js
import React from "react";
import { Box } from "@mui/material";
import NavBar from "./Components/NavBar"; // Your NavBar component
import SimulationSidebar from "./Components/SimulationSidebar"; // Your SimulationSidebar component
import EditButton from "./Components/EditButton"; // The new EditButton component with modal
import MainContent from "./Components/MainContent";
import ModuleController from "./module-controller";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <SimulationSidebar />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          {/* MainContent taking up 70% of the window */}
          <Box sx={{ width: "70%" }}>
            <ModuleController />
            <MainContent />
          </Box>
          {/* EditButton and its container taking up 30% of the window */}
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              p: 2,
            }}
          >
            <EditButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
