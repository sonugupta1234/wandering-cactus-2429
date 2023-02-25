import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductinCart = ({ id, title, image, price, deletefunc, handlecost }) => {
  const [quantity, setQuantity] = useState(1);
  price = price.trim().split(" ");
  let newPrice = +price[1];

  let sum = quantity * newPrice;

  const handledelete = () => {
    return deletefunc(id);
  };

  useEffect(() => {
    handlecost(sum);
  }, [quantity]);

  return (
    <div>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        borderBottom="1px solid grey"
        p="2rem"
      >
        <Box>
          <img src={image} alt={title} width="25%" />
        </Box>
        <Box>
          <Text as={"code"}>{title}</Text>
        </Box>
        <Box>
          <Text as="i" fontSize="lg" color="green">
            {price}
          </Text>
        </Box>
        <Box color="black">
          <Flex justifyContent="center" alignItems="center">
            <button
              style={{
                color: "white",
                backgroundColor: "red",
                width: "50px",
                height: "50px",
                borderRadius: "10px",
              }}
              onClick={() => setQuantity((prev) => prev - 1)}
              disabled={quantity == 0 ? true : false}
            >
              <Text mt="-15px" fontSize="5xl">
                -
              </Text>
            </button>
            <Text as="b" fontSize="xl" p={3}>
              {quantity}
            </Text>
            <button
              style={{
                color: "white",
                backgroundColor: "green",
                width: "50px",
                height: "50px",
                borderRadius: "10px",
              }}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <Text mt="-6px" fontSize="4xl">
                +
              </Text>
            </button>
          </Flex>
        </Box>
        <Box onClick={handledelete}>
          <DeleteIcon boxSize={8} color="red" />
        </Box>
      </Flex>
    </div>
  );
};

export default ProductinCart;
