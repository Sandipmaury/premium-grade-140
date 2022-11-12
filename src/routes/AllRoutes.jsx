import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/register" element={<Signup />} />
      <Route path="/user/login" element={<Login/>} />
    </Routes>
  );
};
