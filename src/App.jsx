import { useState } from "react";
import "./App.css";
import Calc from "./Calc.jsx";
import Menu from "./Menu.jsx";

const App = () => {
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center bg-cover bg-[url(E:\Coding\Js\React\calculator\src\assets\wood.jpg)]">
        <Menu />
        <Calc />
      </div>
    </>
  );
};

export default App;
