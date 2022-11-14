import React from "react";
import { Route, Routes } from "react-router-dom";
import MealDeals from "./meal_deals/MealDeals";
import MealDescription from "./meal_deals/MealDescription";
import { HomePage } from "./HomePage";
import Login from "./Login";
import KindMoments from "./KindMoments";
import Recipe from "./Recipe";
import Signup from "./Signup";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Error } from "./ErrorPage";

export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/register" element={<Signup />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="*" element={<Error />} />
      <Route
        path="/MealDeals"
        element={
          <PrivateRoute>
            <MealDeals />
          </PrivateRoute>
        }
      />
      <Route
        path="/mealDescription"
        element={
          <PrivateRoute>
            <MealDescription />
          </PrivateRoute>
        }
      />
      <Route
        path="/MealDeals/:id"
        element={
          <PrivateRoute>
            <MealDescription />
          </PrivateRoute>
        }
      />
      <Route
        path="/KindMomemts"
        element={
          <PrivateRoute>
            <KindMoments />
          </PrivateRoute>
        }
      />
      <Route
        path="/Recipe"
        element={
          <PrivateRoute>
            <Recipe />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
