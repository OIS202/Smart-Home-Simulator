// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp";
import Home from "./Home";
import SignIn from "./Components/SignIn";
import SimulationParams from "./SimulationParams";

function App() {
  return (
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
          <Route path="/simulationParameters" element={<SimulationParams />} />
          {/* Add additional routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
