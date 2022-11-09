import React from "react";
import { Route, Routes } from "react-router-dom";
import MealDeals from "../pages/meal_deals/MealDeals";
import { HomePage } from "./HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MealDeals" element={<MealDeals />} />
    </Routes>
  );
};
