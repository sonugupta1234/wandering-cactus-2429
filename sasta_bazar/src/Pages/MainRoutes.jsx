import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import Mens from "./Mens";
import MobileAccessories from "./MobileAccessories";
import ShoppingPage from "./Shopping/ShoppingPage";
import SignleProductPage from "./SignleProductPage";
import Womens from "./Womens";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/:id" element={<SignleProductPage />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/womens/:id" element={<SignleProductPage />} />
        <Route path="/mobile" element={<MobileAccessories />} />
        <Route path="/mobile/:id" element={<SignleProductPage />} />
        <Route path="*" element={<h1>Error 404 Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
