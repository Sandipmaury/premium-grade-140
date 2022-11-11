import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import KindMoments from "./KindMoments";
import Recipe from "./Recipe";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/KindMomemts" element={<KindMoments />} ></Route> 
       <Route path="/Recipe" element={<Recipe />} ></Route> */}
      <Route path="/" element={<Recipe />} ></Route> 
    </Routes>
  );
};
