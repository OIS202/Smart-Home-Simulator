// HouseLayout.js
import React, { useState, useContext } from "react";
import { Box, Button, IconButton } from "@mui/material";
import house from "../assets/layout2.jpeg";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import WindowIcon from "@mui/icons-material/Window";

import Lights from "../sh-core/Lights";

import { StateContext } from "../HomePage";

const HouseLayout = () => {
  const [activeBtn, setActiveBtn] = useState("activeBtn");
  const [isOn, setIsOn] = useState({});

  const { state, setState } = useContext(StateContext);

  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    setIsOn((state) => ({
      ...state,
      [btnId]: !state[btnId],
    }));
  };

  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };

  /**
   *
   *
   *
   * Light buttons
   * btn1 through btn7
   *
   */

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

  /**
   *
   * Buttons for the doors
   * btn 8 through btn 10
   *
   *
   */
  function DoorBtns() {
    return (
      <>
        <IconButton
          color="red"
          className={`btn8 ${isOn["btn8"] && activeBtn}`}
          onClick={handleBtn("btn8")}
          sx={{
            position: "absolute",
            top: "37%",
            left: "84%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn8"] ? "lightgreen" : "lightgrey",
          }}
        >
          <DoorFrontIcon />
        </IconButton>
        <IconButton
          color="red"
          className={`btn9 ${isOn["btn9"] && activeBtn}`}
          onClick={handleBtn("btn9")}
          sx={{
            position: "absolute",
            top: "38%",
            left: "43%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn9"] ? "lightgreen" : "lightgrey",
          }}
        >
          <DoorFrontIcon />
        </IconButton>
        <IconButton
          color="red"
          className={`btn10 ${isOn["btn10"] && activeBtn}`}
          onClick={handleBtn("btn10")}
          sx={{
            position: "absolute",
            top: "90%",
            left: "27%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn10"] ? "lightgreen" : "lightgrey",
          }}
        >
          <DoorFrontIcon />
        </IconButton>
      </>
    );
  }

  /**
   *
   *
   * Window buttons
   * btn 11 through btn15
   *
   */
  function WindowBtns() {
    return (
      <>
        <IconButton
          className={`btn11 ${isOn["btn11"] && activeBtn}`}
          onClick={handleBtn("btn11")}
          sx={{
            position: "absolute",
            top: "80%",
            left: "85%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn11"] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          className={`btn12 ${isOn["btn12"] && activeBtn}`}
          onClick={handleBtn("btn12")}
          sx={{
            position: "absolute",
            top: "55%",
            left: "85%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn12"] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          className={`btn13 ${isOn["btn13"] && activeBtn}`}
          onClick={handleBtn("btn13")}
          sx={{
            position: "absolute",
            top: "23%",
            left: "85%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn13"] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          className={`btn14 ${isOn["btn14"] && activeBtn}`}
          onClick={handleBtn("btn14")}
          sx={{
            position: "absolute",
            top: "17%",
            left: "43%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn14"] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
        <IconButton
          className={`btn15 ${isOn["btn15"] && activeBtn}`}
          onClick={handleBtn("btn15")}
          sx={{
            position: "absolute",
            top: "48%",
            left: "16%",
            // transform: "translate(-50%, -50%)",
            backgroundColor: isOn["btn15"] ? "lightblue" : "lightgrey",
          }}
        >
          <WindowIcon />
        </IconButton>
      </>
    );
  }
  const feature = [<LightBtns />, <DoorBtns />, <WindowBtns />];

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
      <>{feature[state]}</>
      {/* <LightBtns /> */}
    </Box>
  );
};

export default HouseLayout;
