import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      Header will be here
      <Nav />
    </header>
  );
};

export default Header;
