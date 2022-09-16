import React, { useState } from "react";
/** @jsxImportSource theme-ui */
import { Button, Box } from "theme-ui";
import { Switch } from "theme-ui";
import { useColorMode } from "theme-ui";
import "./App.css";

const App = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState("light");
  return (
    <div className="App">
      <h1>
        Transitioning an app between light and dark mode in CSS with Theme-UI
      </h1>
      <div className="boxes">
        <Box p={4} color="text" bg="transparent" className="box">
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            explicabo omnis? Laborum voluptatum explicabo unde quae totam,
            reprehenderit omnis delectus expedita quas non corporis, veniam nisi
            consectetur facilis, quam in.
          </div>
        </Box>{" "}
        <Box p={4} color="text" bg="transparent" className="box">
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            explicabo omnis? Laborum voluptatum explicabo unde quae totam,
            reprehenderit omnis delectus expedita quas non corporis, veniam nisi
            consectetur facilis, quam in.
          </div>
        </Box>{" "}
        <Box p={4} color="text" bg="transparent" className="box">
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            explicabo omnis? Laborum voluptatum explicabo unde quae totam,
            reprehenderit omnis delectus expedita quas non corporis, veniam nisi
            consectetur facilis, quam in.
          </div>
        </Box>
      </div>
      <div
        className="para2"
        sx={{ fontWeight: "900", color: "text", fontSize: "lol" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        qui dolorem eaque distinctio magni quasi deserunt ipsam possimus ea
        facilis adipisci asperiores doloremque, natus totam sed, odio aliquam?
        Nihil, ea.
      </div>
      {/* <button sx={{ bg: "primary", color: "inverseText" }}> Toggle</button>
      <Button mr={2}>Beep</Button>
      <Button variant="secondary">Boop</Button>
      <Button ml={2} hidden>
        Hidden
      </Button> */}
      <div className="wr">
        <div>{state === "light" ? <div> Dark</div> : <div>Light</div>}</div>
        <Switch
          className="switch"
          onClick={() => {
            setColorMode(colorMode === "light" ? "dark" : "light");
            setState(colorMode === "light" ? "dark" : "light");
          }}
        />
      </div>
    </div>
  );
};

export default App;
