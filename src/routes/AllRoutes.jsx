import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
