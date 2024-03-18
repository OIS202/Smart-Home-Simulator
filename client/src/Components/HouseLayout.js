// HouseLayout.js
import React, { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import house from "../assets/layout2.jpeg";

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

  function LightBtns() {
    return (
      <>
        <IconButton
          color="white"
          className={`btn1 ${isOn["btn1"] && activeBtn}`}
          onClick={handleBtn("btn1")}
          sx={{
            position: "absolute",
            top: "18%",
            left: "52%",
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
            left: "75%",
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
            top: "56%",
            left: "78%",
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
            top: "55%",
            left: "27%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn4"] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          className={`btn5 ${isOn["btn5"] && activeBtn}`}
          onClick={handleBtn("btn5")}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "75%",
            left: "75%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn5"] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          className={`btn6 ${isOn["btn6"] && activeBtn}`}
          onClick={handleBtn("btn6")}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "55%",
            left: "58%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn6"] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
        <IconButton
          color="white"
          className={`btn7 ${isOn["btn7"] && activeBtn}`}
          onClick={handleBtn("btn7")}
          sx={{
            position: "absolute",
            // width: "3rem",
            // height: "3rem",
            top: "37%",
            left: "33%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn7"] ? "gold" : "lightgrey",
          }}
        >
          <LightbulbIcon />
        </IconButton>
      </>
    );
  }

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
      <img src={house} alt="House" style={{ width: "80%" }} />
      {/**
       * Image above, buttons below
       * What needs to be figured out is how to
       * automatically generate the buttons and place them accordingly
       */}
      <LightBtns />
    </Box>
  );
};

export default HouseLayout;
