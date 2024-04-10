// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import Home from "./Home";
import SignIn from "./Components/SignIn";
import SimulationParams from "./SimulationParams";
import { DeviceProvider } from "./Components/contexts/DeviceContext";
import { ProtectionProvider } from "./Components/contexts/ProtectionContext";

function App() {
  return (
    <DeviceProvider>
      {" "}
      {/* Wrap the entire Router with DeviceProvider */}
      <ProtectionProvider>
        {" "}
        {/* Then, wrap with ProtectionProvider */}
        <Router>
          {" "}
          {/* Router provides the routing context for the rest of the components */}
          <div className="App">
            <Routes>
              {" "}
              {/* Routes replaces Switch in react-router-dom v6 */}
              <Route exact path="/" element={<Home />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route
                path="/simulationParameters"
                element={<SimulationParams />}
              />
              {/* Add additional routes here as needed */}
            </Routes>
          </div>
        </Router>
      </ProtectionProvider>
    </DeviceProvider>
  );
}

export default App;
