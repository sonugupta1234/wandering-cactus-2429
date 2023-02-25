import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  HStack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMensData } from "../Redux/ProductReducer/action";
import trustScore from "../Images/trustScore.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { postCartData } from "../Redux/CartReducer/action";
import Navbar from "../Components/ShoppingCom/Navbar";

const SignleWomenProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { womens_data, isLoading, isError } = useSelector(
    (store) => store.ProductReducer
  );
  const [data, setData] = useState({});
  useEffect(() => {
    if (womens_data.length === 0) {
      dispatch(getMensData());
    }
  }, [womens_data.length, dispatch]);
  useEffect(() => {
    let newData = womens_data.find((item) => item.id === Number(id));
    // console.log(newData, "s");
    newData && setData(newData);
  }, [id, womens_data]);

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
      <Breadcrumb
        spacing="10px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml={["20px", "25px", "40px", "100px"]}
        mt="5"
        mb="5"
        fontSize="lg"
      >
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/shop">Shop</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/womens">Womens</Link>
        </BreadcrumbItem>
      </Breadcrumb>
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
            Price: {data && data.price}
          </Heading>
          <HStack w="100%" gap="10%" mt="5">
            <Button
              variant="outline"
              w="40%"
              border="1px solid blue"
              _hover={{ bg: "blue", color: "white" }}
              onClick={handleCartAdd}
            >
              Add to Cart
            </Button>
            <Button
              w="40%"
              bg="#2a6462"
              color="white"
              _hover={{ bg: "blue", color: "white" }}
              onClick={handleCartAdd}
            >
              Buy Now
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
      <Flex
        direction={["column", "column", "row"]}
        color="gray"
        bg="#232324"
        justifyContent="space-between"
        alignItems="center"
        h="80px"
        mt="10"
      >
        <Box ml="5">Copyright © 1996-2023 IndiaMART. All rights reserved.</Box>
        <HStack mr="5" gap="5">
          <Box>Home </Box>
          <Box> Sell on IndiaMART</Box>
          <Box>FAQ</Box>
          <Box>Terms of Use</Box>
          <Box> Privacy Policy</Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default SignleWomenProductPage;
