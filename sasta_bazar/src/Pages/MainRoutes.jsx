import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import Mens from "./Mens";
import MobileAccessories from "./MobileAccessories";

import ShoppingPage from "./Shopping/ShoppingPage";
// import SignleProductPage from "./SignleProductPage";

import SignleMenProductPage from "./SignleMenProductPage";
import SignleWomenProductPage from "./SignleWomenProductPage";
import SingleMobileAccessoriesProductPage from "./SingleMobileAccessoriesProductPage";
import Cart from "./Cart";
import { PrivateRoutes } from "../Components/PrivateRoutes";

import Womens from "./Womens";

import { Login } from "../Components/Login";

import ShopIndex from "../Components/ShoppingCom/ShopIndex";
import Payment from "./Payment";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/:id" element={<SignleMenProductPage />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/womens/:id" element={<SignleWomenProductPage />} />
        <Route path="/mobile" element={<MobileAccessories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />

        <Route
          path="/mobile/:id"
          element={<SingleMobileAccessoriesProductPage />}
        />
        <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />
        <Route path="/shop" element={<ShopIndex />} />
        <Route path="*" element={<h1>Error 404 Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
