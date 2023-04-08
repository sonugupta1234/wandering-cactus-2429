import { useEffect } from "react";

import {
  Box,
  Heading,
  Button,
  Input,
  Flex,
  Text,
  Image,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import {
  getMensData,
  getWomensData,
  getMobileData,
} from "../Redux/ProductReducer/action";
import MensProductCards from "../Components/MensProductCards";
import CardSkeleton from "../Components/Skeleton";

export const Homepage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, mens_data, mobile_data, womens_data } =
    useSelector((store) => store.ProductReducer);
  //getting data from server
  useEffect(() => {
    dispatch(getMensData());
    dispatch(getWomensData());
    dispatch(getMobileData());
  }, []);

  return (
    <Box>
      {/* Navbar */}
      <Navbar />
      {/* Carousel Section */}
      <Box w={"100%"}>
        <Carousel />
      </Box>

      {/* Trending Products */}
      <Box mt="10">
        <Heading textAlign="left">Trending Products</Heading>
        {isLoading ? (
          <CardSkeleton />
        ) : isError ? (
          <Heading>😒 Sorry some problems in the server </Heading>
        ) : (
          <Box
            mt="5"
            display={"grid"}
            alignItems={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              ,
              "1fr 1fr 1fr 1fr 1fr",
            ]}
          >
            {womens_data.length > 0 &&
              womens_data.map((e, ind) => {
                return ind < 5 ? <MensProductCards {...e} /> : "";
              })}
          </Box>
        )}
      </Box>
      {/* Deals of the day  */}
      <Box mt="5">
        <Heading textAlign="left">Deals of the day</Heading>
        {isLoading ? (
          <CardSkeleton />
        ) : isError ? (
          <Heading>😒 Sorry some problems in the server </Heading>
        ) : (
          <Box
            mt="5"
            display={"grid"}
            alignItems={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              ,
              "1fr 1fr 1fr 1fr 1fr",
            ]}
          >
            {mens_data.length > 0 &&
              mens_data.map((e, ind) => {
                return ind < 5 ? <MensProductCards {...e} /> : "";
              })}
          </Box>
        )}
      </Box>
      {/* Todays Specials  */}
      <Box mt="5">
        <Heading textAlign="left">Today's Specials </Heading>
        {isLoading ? (
          <CardSkeleton />
        ) : isError ? (
          <Heading>😒 Sorry some problems in the server </Heading>
        ) : (
          <Box
            mt="5"
            display={"grid"}
            alignItems={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              ,
              "1fr 1fr 1fr 1fr 1fr",
            ]}
          >
            {mobile_data.length > 0 &&
              mobile_data.map((e, ind) => {
                return ind < 5 ? <MensProductCards {...e} /> : "";
              })}
          </Box>
        )}
      </Box>
      {/* Get mobile App Section */}

      <Box width={{ base: "100%", sm: "90%", md: "80%" }} margin="auto" mt={20}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "30%" }}>
            <Image src="https://hm.imimg.com/imhome_gifs/app-img.png" alt="" />
          </Box>

          <Box width={{ base: "100%", md: "50%" }} ml={{ base: 0, md: 30 }}>
            <Box>
              <Heading>Get IndiaMART App</Heading>
              <Text>
                Search for products/services and connect with verified sellers
                on the go!
              </Text>
            </Box>

            <Box mt={{ base: 10, md: 30 }}>
              <Flex direction={{ base: "column", md: "row" }}>
                <InputGroup width={{ base: "100%", md: "70%" }}>
                  <InputLeftAddon children="+91" />
                  <Input type="tel" placeholder="Enter Mobile Number" />
                </InputGroup>
                <Button
                  color="white"
                  backgroundColor={"#007A6E"}
                  _hover={{ backgroundColor: "#007A6E" }}
                  mt={{ base: 4, md: 0 }}
                  ml={{ base: 0, md: 4 }}
                >
                  Send me the link
                </Button>
              </Flex>
              <Text mt={10}>
                We will send you a link, open it on your phone to download the
                App
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
