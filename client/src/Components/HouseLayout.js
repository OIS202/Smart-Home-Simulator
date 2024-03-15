// HouseLayout.js
import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import logoSrc from "../assets/House.jpg";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const HouseLayout = () => {
  const [activeBtn, setActiveBtn] = useState("activeBtn");
  const [isOn, setIsOn] = useState({});

  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    setIsOn((state) => ({
      ...state,
      [btnId]: !state[btnId],
    }));
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Box
      sx={{
        position: "relative",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100%", // Adjust as needed
        width: "100%", // Adjust as needed
      }}
    >
      <img src={logoSrc} alt="House" style={{ width: "100%" }} />
      <IconButton
        color="white"
        className={`btn1 ${isOn["btn1"] && activeBtn}`}
        onClick={handleBtn("btn1")}
        sx={{
          position: "absolute",
          top: "15%",
          left: "10%",
          // transform: "translate(-50%, -50%)",
          backgroundColor: isOn["btn1"] ? "gold" : "lightgrey",
        }}
      >
        <LightbulbIcon />
      </IconButton>
      <IconButton
        color="white"
        className={`btn2 ${isOn["btn2"] && activeBtn}`}
        onClick={handleBtn("btn2")}
        sx={{
          position: "absolute",
          top: "15%",
          left: "25%",
          // transform: "translate(-50%, -50%)",
          backgroundColor: isOn["btn2"] ? "gold" : "lightgrey",
        }}
      >
        <LightbulbIcon />
      </IconButton>
      <IconButton
        color="white"
        className={`btn3 ${isOn["btn3"] && activeBtn}`}
        onClick={handleBtn("btn3")}
        sx={{
          position: "absolute",
          // width: "10%",
          // height: "10%",
          top: "33%",
          left: "12%",
          // transform: "translate(-50%, -50%)",
          backgroundColor: isOn["btn3"] ? "gold" : "lightgrey",
        }}
      >
        <LightbulbIcon
        // sx={{
        //   position: "relative",
        //   width: "100%",
        // }}
        />
      </IconButton>
      <IconButton
        color="white"
        className={`btn4 ${isOn["btn4"] && activeBtn}`}
        onClick={handleBtn("btn4")}
        sx={{
          position: "absolute",
          // width: "3rem",
          // height: "3rem",
          top: "60%",
          left: "25%",
          // transform: "translate(-50%, -50%)",
          backgroundColor: isOn["btn4"] ? "gold" : "lightgrey",
        }}
      >
        <LightbulbIcon />
      </IconButton>
    </Box>
  );
};

export default HouseLayout;
