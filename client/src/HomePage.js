// HomePage.js
import React, { useState, createContext } from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "./Components/NavBar"; // Your NavBar component
import SimulationSidebar from "./Components/SimulationSidebar"; // Your SimulationSidebar component
import EditButton from "./Components/EditButton"; // The new EditButton component with modal
import ModuleController from "./module-controller";
import HouseLayout from "./Components/HouseLayout";

export const StateContext = createContext();

const HomePage = () => {
  const [state, setState] = useState(0);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <StateContext.Provider value={{ state, setState }}>
        {/* <Typography>{state}</Typography> */}
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <SimulationSidebar />
          <Box>
            {/* MainContent taking up 70% of the window */}
            <Box sx={{ display: "flex" }}>
              <ModuleController />
              <HouseLayout />
            </Box>
            {/* EditButton and its container taking up 30% of the window */}
            <Box>
              <EditButton />
            </Box>
          </Box>
        </Box>
      </StateContext.Provider>
    </Box>
  );
};

export default HomePage;
