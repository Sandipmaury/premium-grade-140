import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
