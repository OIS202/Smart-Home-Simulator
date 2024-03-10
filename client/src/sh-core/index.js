import * as React from "react";
import { useState } from "react";

import { Button, Typography } from "@mui/material";

function Lights() {
  return (
    <div>
      <input type="checkbox" id="light-kitchen" value="light" />
      <label for="light-kitchen">Kitchen</label>
      <br />
      <input type="checkbox" id="light-livingroom" value="light" />
      <label for="light-livingroom">Living room</label>
      <br />
      <input type="checkbox" id="light-bathroom" value="light" />
      <label for="light-bathroom">Bathroom</label>
      <br />
      <input type="checkbox" id="light-master" value="light" />
      <label for="light-master">Master Bedroom</label>
      <br />
      <input type="checkbox" id="light-bedroom1" value="light" />
      <label for="light-bedroom1">Kid Bedroom</label>
      <br />
      <input type="checkbox" id="light-garage" value="light" />
      <label for="light-garage">Garage</label>
      <br />
      <input type="checkbox" id="light-backyard" value="light" />
      <label for="light-backyard">Backyard</label>
      <br />
      <br />
      <input type="checkbox" id="light-all" value="light" />
      <label for="light-all">All Lights</label>
    </div>
  );
}

function Doors() {
  return (
    <div>
      <input type="checkbox" id="door-front" value="door" />
      <label for="door-front">Front Door</label>
      <br />
      <input type="checkbox" id="door-back" value="door" />
      <label for="door-back">Back Door</label>
      <br />
      <input type="checkbox" id="door-garage" value="door" />
      <label for="door-garage">Garage Door</label>
      <br />
      <br />
      <input type="checkbox" id="door-all" value="door" />
      <label for="door-all">All Doors</label>
    </div>
  );
}

function Windows() {
  return (
    <div>
      <input type="checkbox" id="window-kitchen" value="window" />
      <label for="window-kitchen">Kitchen</label>
      <br />
      <input type="checkbox" id="window-livingroom" value="window" />
      <label for="window-livingroom">Livingroom</label>
      <br />
      <input type="checkbox" id="window-master" value="window" />
      <label for="window-master">Master Bedroom</label>
      <br />
      <input type="checkbox" id="window-bedroom1" value="window" />
      <label for="window-bedroom1">Kid Bedroom</label>
      <br />
      <input type="checkbox" id="window-garage" value="window" />
      <label for="window-garage">Garage</label>
      <br />
      <br />
      <input type="checkbox" id="window-all" value="window" />
      <label for="window-all">All Windows</label>
    </div>
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
        <menu>
          <Button
            //   color="secondary"
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Lights
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Doors
          </Button>
          <Button
            //   style ={{color:"#364cff"}}
            //   // variant="contained"
            //   size="large"
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Windows
          </Button>
        </menu>
        <div id="tab-content">{features[activeContentIndex]}</div>
      </div>
    </div>
  );
}

export default Core;
