import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* We will add more routes here later, e.g., /products, /solutions */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

