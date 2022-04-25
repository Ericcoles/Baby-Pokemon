import React from "react";
import Home from "./Home";
import About from "./About";
import FavList from "./FavList";
import PokeList from "./PokeList";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokelist" element={<PokeList />} />
        <Route path="/favlist" element={<FavList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
