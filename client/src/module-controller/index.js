import * as React from "react";
import { useState } from "react";
import Core from "../sh-core";

import { Button, Typography } from "@mui/material";

function ModuleController() {
  const [activeContentIndex, setActiveContentIndex] = useState();

  const modules = [
    <Typography variant="h6">Smart Home Simulator</Typography>,
    <Core />,
    <Typography variant="h6">Smart Home Security</Typography>,
    <Typography variant="h6">Smart Home Heating</Typography>,
  ];

  return (
    <div>
      <div id="tabs">
        <menu>
          <Button
            //   color="secondary"
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            SHS
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            SHC
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            SHP
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            SHH
          </Button>
        </menu>
        <div id="tab-content">{modules[activeContentIndex]}</div>
      </div>
    </div>
  );
}

export default ModuleController;
