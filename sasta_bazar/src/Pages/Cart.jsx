import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductinCart from "../Components/ProductinCart";
import { deleteCartData } from "../Redux/CartReducer/action";
import Navbar from "../Components/ShoppingCom/Navbar";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalcost, setTotalcost] = useState(0);
  let newSum = 0;
  const cart = useSelector((store) => {
    return store.CartReducer.cart;
  });

  localStorage.setItem("cart", JSON.stringify(cart))

  const deletefunc = (id) => {
    let carthai = cart.filter((el) => el.id !== id);
    dispatch(deleteCartData(carthai));
  };

  const handlecost = (sum) => {
    newSum += sum;
    setTotalcost(newSum);
  };
  // console.log(totalcost, "cost");
  if (cart.length == 0) {
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div>
          <Box>
            <Text ml="40px" fontSize="3xl" as="b">
              My Cart
            </Text>
            <hr />
            <Box textAlign="center">
              <Text p="6rem" fontSize="5xl" fontWeight="semibold">
                Cart Is Empty 🛒 ☹️
              </Text>
            </Box>
          </Box>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>

        <Box pr={8} pl={8}>
          <Text ml="40px" fontSize="3xl" as="b">
            My Cart 😊
          </Text>
          <hr />
          <Text fontSize="lg" as="i">
            You have{" "}
            <span style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
              {cart.length}
            </span>{" "}
            items in your cart.
          </Text>
          {cart.length > 0 && cart.map((el) => (
            <ProductinCart
              key={el.id}
              {...el}
              deletefunc={deletefunc}
              handlecost={handlecost}
            />
          ))}
          <hr />
          <Box textAlign="right" p="1rem">
            <Text as="b" fontSize="3xl">
              Cart Total : <span style={{ color: "green" }}>₹{totalcost}</span>{" "}
            </Text>
            <Text mb={3} fontSize="xs">
              Inclusive of all the applicable taxes
            </Text>
            <button
              style={{
                color: "white",
                width: "150px",
                height: "50px",
                backgroundColor: "#2e3192",
                borderRadius: "10px",
                fontSize: "20px",
              }}
              onClick={() => navigate("/payment")}
            >
              Place Order😊
            </button>
          </Box>
        </Box>

      </div>

    </>
  );
};

export default Cart;
