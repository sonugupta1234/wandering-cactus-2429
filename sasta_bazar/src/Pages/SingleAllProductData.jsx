import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  HStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import trustScore from "../Images/trustScore.png";

import { postCartData } from "../Redux/CartReducer/action";
import Navbar from "../Components/ShoppingCom/Navbar";
import axios from "axios";
const SingleAllProductData = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://wild-blue-swallow-wig.cyclic.app/products/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  const toast = useToast();
  const handleCartAdd = () => {
    dispatch(postCartData(data));
    toast({
      position: "top",
      title: "Item Added",
      description: "You've added this item in Cart.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <Box>
      <Navbar />

      <Flex
        direction={["column", "column", "row"]}
        ml={["20px", "25px", "40px", "100px"]}
        mr={["20px", "25px", "40px", "100px"]}
      >
        <Box>
          <Image
            src={data && data.image}
            alt={data && data.brands}
            objectFit="fill"
            h="500px"
            w="500px"
            maxHeight="500px"
          />
        </Box>
        <Box textAlign="left" pl={["2", "3", "5", "20"]}>
          <Heading as="h2" fontWeight="semibold" fontSize="2xl">
            {data && data.title}
          </Heading>

          <Heading as="h2" fontWeight="semibold" fontSize="2xl" lineHeight="10">
            Price: ₹{data && data.price}
          </Heading>
          <HStack w="100%" gap="10%" mt="5">
            <Button
              colorScheme="facebook"
              w="60%"
              border="1px solid blue"
              onClick={handleCartAdd}
            >
              Add to Cart
            </Button>
          </HStack>
          <Box borderBottom="2px solid gray">
            <Image src={trustScore} alt="product trust score" mt="10" mb="5" />
          </Box>
          <Text mt="5" fontWeight="bold">
            Details
          </Text>
          <Text color="gray">Country of Origin: India</Text>
          <Text color="gray">Size:Medium</Text>
          <Text color="gray">SKU:UTMF003578</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleAllProductData;
