import React from "react";

function Nev() {
  return (
    <div className=" flex justify-between bg-green-700 place-content-center">
      <div className="m-1 p-1 font-bold text-xl">Nev</div>
      <div className=" flex">
        <a className="p-1 hover:bg-green-600" href="#home">
          Home
        </a>
        <a className="p-1 hover:bg-green-600" href="#about">
          About
        </a>
        <a className=" p-1 hover:bg-green-600" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nev;
