import React from "react";
import { Route, Routes } from "react-router-dom";
import Dummy from "../components/Dummy";
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dummy />}></Route>
      </Routes>
    </div>
  );
};

export default MainRouter;
