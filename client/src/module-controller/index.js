import * as React from "react";
import { useState } from "react";

import { Button, Typography, ButtonGroup } from "@mui/material";

import Core from "../sh-core";
import Heating from "../sh-heating";

function ModuleController() {
  const [activeContentIndex, setActiveContentIndex] = useState(1);

  const modules = [
    <Typography variant="h6">Smart Home Simulator</Typography>,
    <Core />,
    <Typography variant="h6">Smart Home Security</Typography>,
    <Heating />,
  ];

  return (
    <div>
      <div id="tabs">
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{ padding: "30px", boxShadow: "none" }}
        >
          <Button
            color={activeContentIndex === 0 ? "secondary" : "primary"}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            SHS
          </Button>
          <Button
            color={activeContentIndex === 1 ? "secondary" : "primary"}
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            SHC
          </Button>
          <Button
            color={activeContentIndex === 2 ? "secondary" : "primary"}
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            SHP
          </Button>
          <Button
            color={activeContentIndex === 3 ? "secondary" : "primary"}
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            SHH
          </Button>
        </ButtonGroup>
        <div id="tab-content">{modules[activeContentIndex]}</div>
      </div>
    </div>
  );
}

export default ModuleController;
