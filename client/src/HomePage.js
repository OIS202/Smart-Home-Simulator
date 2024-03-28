import React from "react";
import { Box } from "@mui/material";
import NavBar from "./Components/NavBar";
import SimulationSidebar from "./Components/SimulationSidebar";
import EditButton from "./Components/EditButton";
import EditDevice from "./Components/EditDevice";
import AddDevice from "./Components/AddDevice";
import ModuleController from "./module-controller";
import HouseLayout from "./Components/HouseLayout";
import LocalStorageConsole from "./Components/LocalStorageConsole"; // Make sure the path is correct

import { DeviceProvider } from "./Components/contexts/DeviceContext";
import { HeatingProvider } from "./Components/contexts/HeatingContext";
import { ModuleProvider } from "./Components/contexts/ModuleContext";

const HomePage = () => {
  console.log("HomePage rendering"); // Console log for debugging

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <ModuleProvider>
        <HeatingProvider>
          <DeviceProvider>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <SimulationSidebar />
              <Box
                sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}
              >
                {/* Main Content taking up most of the window */}
                <Box sx={{ display: "flex", flexGrow: 1 }}>
                  <ModuleController />
                  <HouseLayout />
                </Box>
                {/* LocalStorageConsole and EditButtons */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Assuming LocalStorageConsole should take the remaining space */}
                  <Box sx={{ flexGrow: 1 }}>
                    {" "}
                    {/* Temporary background color for visibility */}
                    <LocalStorageConsole />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <AddDevice />
                    <EditDevice />
                    <EditButton />
                  </Box>
                </Box>
              </Box>
            </Box>
          </DeviceProvider>
        </HeatingProvider>
      </ModuleProvider>
    </Box>
  );
};

export default HomePage;
