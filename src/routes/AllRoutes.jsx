import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import KindMoments from "./KindMoments";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<KindMoments />} /> */}
    </Routes>
  );
};
