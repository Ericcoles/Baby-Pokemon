import React from "react";
import { Link, Outlet } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      PokeList will be here
      <Link to="pokesingle">Some single pokemon link</Link>
    </div>
  );
};

export default PokeList;
