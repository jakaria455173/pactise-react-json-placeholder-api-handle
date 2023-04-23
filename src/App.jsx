import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}
export default App;
