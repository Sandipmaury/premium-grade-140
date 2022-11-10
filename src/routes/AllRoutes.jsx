import React from "react";
import { Route, Routes } from "react-router-dom";
import MealDeals from "./meal_deals/MealDeals";
import { HomePage } from "./HomePage";
import MealDescription from "./meal_deals/MealDescription";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MealDeals" element={<MealDeals />} />
      <Route path="/mealDescription" element={<MealDescription />} />

    </Routes>
  );
};
