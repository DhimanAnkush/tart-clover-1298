import React from "react";
import { Route, Routes } from "react-router-dom";
import Dummy from "../components/Dummy";
import { Home } from "../components/Home";
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default MainRouter;
