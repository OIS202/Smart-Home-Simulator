// HomePage.js
import React, { useState, createContext } from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "./Components/NavBar"; // Your NavBar component
import SimulationSidebar from "./Components/SimulationSidebar"; // Your SimulationSidebar component
import EditButton from "./Components/EditButton"; // The new EditButton component with modal
import EditDevice from "./Components/EditDevice"; // The new EditButton component with modal
import AddDevice from "./Components/AddDevice"; // The new EditButton component with modal
import ModuleController from "./module-controller";
import HouseLayout from "./Components/HouseLayout";

import { DeviceProvider } from "./Components/DeviceContext";

export const CoreContext = createContext();
// export const DeviceContext = createContext();

// export const DeviceProvider = ({ children }) => {
//   const [selectedDevices, setSelectedDevices] = useState([]);

//   const toggleDevice = (device) => {
//     setSelectedDevices((prevSelectedDevices) =>
//       prevSelectedDevices.includes(device)
//         ? prevSelectedDevices.filter((d) => d !== device)
//         : [...prevSelectedDevices, device]
//     );
//   };

//   return (
//     <DeviceContext.Provider value={{ selectedDevices, toggleDevice }}>
//       {children}
//     </DeviceContext.Provider>
//   );
// };

// export const useDeviceContext = () => useContext(DeviceContext);

const HomePage = () => {
  const [state, setState] = useState(0);
  // const [deviceState, setDeviceState] = useState({});

  // function checkDevices() {
  //   return deviceState.forEach((element) => {
  //     <Typography>{element}</Typography>;
  //   });
  // }

  // function Mata({ activeTab = -1, buttons, setActiveTab }) {
  //   return (
  //     <div className="container">
  //       {buttons.map((btn, i) => {
  //         const isActive = i === activeTab;
  //         return (
  //           <button
  //             key={btn.id}
  //             style={{ backgroundColor: isActive ? "#262626" : "#F3F3F3" }}
  //             className={`${btn.id} ${isActive && activeTab}`}
  //             onClick={() => setActiveTab(i)}
  //           >
  //             {btn.id}
  //           </button>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  // const tabs = [
  //   { id: "btn1", data: "data1" },
  //   { id: "btn2", data: "data2" },
  //   { id: "btn3", data: "data3" },
  //   { id: "btn4", data: "data4" },
  //   { id: "btn5", data: "data5" },
  // ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <CoreContext.Provider value={{ state, setState }}>
        {/* <Typography>core context state: {state}</Typography> */}
        <DeviceProvider>
          {/* <DeviceContext.Provider value={{ deviceState, setDeviceState }}> */}
          {/* <Typography>device context state: {deviceState[0]}</Typography> */}
          {/* <Mata
            activeTab={activeTab}
            buttons={tabs}
            setActiveTab={setActiveTab}
          />

          {activeTab === -1 ? (
            <div>Social Media</div>
          ) : (
            <div>{tabs[activeTab].data}</div>
          )} */}
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <SimulationSidebar />
            <Box>
              {/* MainContent taking up 70% of the window */}
              <Box sx={{ display: "flex" }}>
                <ModuleController />
                <HouseLayout />
              </Box>
              {/* EditButton and its container taking up 30% of the window */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <AddDevice />
                <EditDevice />
                <EditButton />
              </Box>
            </Box>
          </Box>
        </DeviceProvider>
        {/* </DeviceContext.Provider> */}
      </CoreContext.Provider>
    </Box>
  );
};

export default HomePage;
