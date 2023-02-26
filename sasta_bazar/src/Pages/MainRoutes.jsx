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

import Womens from "./Womens";

import { Login } from "../Components/Login";

import ShopIndex from "../Components/ShoppingCom/ShopIndex";
import { NewProduct } from "../Admin/Components/AddProductPage/NewProduct";
import Admin_Home from "../Admin/Components/Admin_Home/Admin_Home";
import { Product } from "../Admin/Components/ProductListPage/Product";


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

        {/* <Route path="/mobile/:id" element={<SignleProductPage />} /> */}

        <Route
          path="/mobile/:id"
          element={<SingleMobileAccessoriesProductPage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<ShopIndex />} />
        <Route path="*" element={<h1>Error 404 Page not found</h1>} />
        <Route path="/admin" element={<Admin_Home />} />
        <Route path="/admin_add_product" element={<NewProduct />} />
        <Route path="/admin_product_list" element={<Product />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
