import * as React from "react";
import { useState, useContext } from "react";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
// import {WindowOutlinedIcon, DoorFrontOutlinedIcon, LightbulbOutlinedIcon} from "@mui/icons-material";
import {
  Button,
  // Box,
  ButtonGroup,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

import { StateContext } from "../HomePage";

function Lights() {
  return (
    <FormGroup sx={{ padding: "10px" }}>
      <FormControlLabel
        control={<Checkbox />}
        label="Kitchen"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Livingroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Bathroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Master Bedroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Kid Bedroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Garage"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Backyard"
        onChange={() => {}}
      />
      <br />
      <FormControlLabel
        control={<Checkbox />}
        label="All Lights"
        onChange={() => {}}
      />
    </FormGroup>
  );
}

function Doors() {
  return (
    <FormGroup sx={{ padding: "10px" }}>
      <FormControlLabel
        control={<Checkbox />}
        label="Front Door"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Back Door"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Garage Door"
        onChange={() => {}}
      />
      <br />
      <FormControlLabel
        control={<Checkbox />}
        label="All Doors"
        onChange={() => {}}
      />
    </FormGroup>
  );
}

function Windows() {
  return (
    //can eventually add children in form group
    <FormGroup sx={{ padding: "10px" }}>
      <FormControlLabel
        control={<Checkbox />}
        label="Kitchen"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Livingroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Master Bedroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Kid Bedroom"
        onChange={() => {}}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="Garage"
        onChange={() => {}}
      />
      <br />
      <FormControlLabel
        control={<Checkbox />}
        label="All Windows"
        onChange={() => {}}
      />
    </FormGroup>
  );
}

/**
 * CORE FUNCTION
 */
function Core() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const { state, setState } = useContext(StateContext);

  const features = [
    //lights
    <Lights />,
    <Doors />,
    <Windows />,
  ];

  // function set(num) {
  //   setState(num);
  // }

  return (
    <div>
      <div id="tabs">
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{ padding: "10px" }}
        >
          <Button
            color={activeContentIndex === 0 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => {
              setActiveContentIndex(0);
              setState(0);
            }}
          >
            <LightbulbOutlinedIcon />
          </Button>
          <Button
            color={activeContentIndex === 1 ? "secondary" : "primary"}
            variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => {
              setActiveContentIndex(1);
              setState(1);
            }}
          >
            <DoorFrontOutlinedIcon />
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            variant="contained"
            //   size="large"
            color={activeContentIndex === 2 ? "secondary" : "primary"}
            onClick={() => {
              setActiveContentIndex(2);
              setState(2);
            }}
          >
            <WindowOutlinedIcon />
          </Button>
        </ButtonGroup>
        <div id="tab-content" style={{ display: "flex" }}>
          {features[activeContentIndex]}
        </div>
      </div>
    </div>
  );
}

export default Core;
