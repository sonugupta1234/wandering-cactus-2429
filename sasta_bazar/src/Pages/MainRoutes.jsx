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
import ShopIndex from "../Components/ShoppingCom/ShopIndex";
import Payment from "./Payment";
import { NewProduct } from "../Admin/Components/AddProductPage/NewProduct";
import Admin_Home from "../Admin/Components/Admin_Home/Admin_Home";
import { Product } from "../Admin/Components/ProductListPage/Product";
import Login from "./Login";
import SignUp from "./SignUp";
import { Admin_Userlist } from "../Admin/Components/Admin_User_List/Admin_Userlist";
import SearchData from "./SearchData";
import SingleAllProductData from "./SingleAllProductData";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mens/:id" element={<PrivateRoutes><SignleMenProductPage /></PrivateRoutes>} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/womens/:id" element={<PrivateRoutes> <SignleWomenProductPage /> </PrivateRoutes>} />
        <Route path="/searchdata/:id" element={<PrivateRoutes><SingleAllProductData /></PrivateRoutes>} />
        <Route path="/mobile" element={<MobileAccessories />} />
        <Route path="/searchdata" element={<SearchData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />

        <Route
          path="/mobile/:id"
          element={<PrivateRoutes> <SingleMobileAccessoriesProductPage /></PrivateRoutes>}
        />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
        <Route
          path="/shop"
          element={<ShopIndex />} />
        <Route path="*" element={<h1>Error 404 Page not found</h1>} />
        <Route path="/admin" element={<Admin_Home />} />
        <Route path="/admin_add_product" element={<NewProduct />} />
        <Route path="/admin_product_list" element={<Product />} />
        <Route path="/admin_user_list" element={<Admin_Userlist />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
