import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Nev from "./components/Nev";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Nev />
      <center>
        <Main />
      </center>
    </>
  );
}

export default App;
