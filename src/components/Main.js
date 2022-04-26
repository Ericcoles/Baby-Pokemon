import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;

{
  /* <Routes>
<Route path="/" element={<Home />} />
<Route path="/pokelist" element={<PokeList />}>
  <Route path="pokesingle" element={<PokeSingle />} />
</Route>
<Route path="/favlist" element={<FavList />} />
<Route path="/about" element={<About />} />
</Routes> */
}
