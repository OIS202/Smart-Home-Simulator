import * as React from "react";
import { useState } from "react";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
// import {WindowOutlinedIcon, DoorFrontOutlinedIcon, LightbulbOutlinedIcon} from "@mui/icons-material";
import {
  Button,
  Box,
  ButtonGroup,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

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
        label="All Windows"
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

function Core() {
  const [activeContentIndex, setActiveContentIndex] = useState();

  const features = [
    //lights
    <Lights />,
    <Doors />,
    <Windows />,
  ];

  return (
    <div>
      <div id="tabs">
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{ padding: "10px" }}
        >
          <Button
            //   color="secondary"
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            <LightbulbOutlinedIcon />
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            <DoorFrontOutlinedIcon />
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
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
