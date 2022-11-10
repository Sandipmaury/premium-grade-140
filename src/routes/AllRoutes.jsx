import React from "react";
import { Route, Routes } from "react-router-dom";
import MealDeals from "./meal_deals/MealDeals";
import MealDescription from "./meal_deals/MealDescription";
import { HomePage } from "./HomePage";
import KindMoments from "./KindMoments";
import Recipe from "./Recipe";
import Signup from "./Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<KindMoments />} /> */}
      <Route path="/MealDeals" element={<MealDeals />} />
      <Route path="/mealDescription" element={<MealDescription />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/KindMomemts" element={<KindMoments />} ></Route>
      <Route path="/Recipe" element={<Recipe />} ></Route>
    </Routes>

  );
};
