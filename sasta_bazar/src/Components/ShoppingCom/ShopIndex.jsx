import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getSop_Accesories,
  getSop_men,
  getSop_Women,
} from "../../Redux/ShoppingReducer/action";

import Navbar from "./Navbar";

import {
  getMobileData,
  getWomensData,
} from "../../Redux/ProductReducer/action";
import MobileAccessoriesCards from "../MobileAccessoriesCards";
import WomensProductCards from "../WomensProductCards";
import MensProductCards from "../MensProductCards";
import CardSkeleton from "../Skeleton";
const ShopIndex = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menCount, setMenCount] = useState(10);
  const [womenCount, setwomenCount] = useState(10);
  const [AccCount, setAccCount] = useState(10);
  const { isLoading, isError, Sop_men_data, Sop_women_data, Sop_Mob_Data } =
    useSelector((store) => store.shopReducer);
  const usedispatch = useDispatch();
  useEffect(() => {
    usedispatch(getSop_men(menCount));
    usedispatch(getSop_Women(womenCount));
    usedispatch(getSop_Accesories(AccCount));
  }, [menCount, AccCount, womenCount]);
  useEffect(() => {
    usedispatch(getWomensData());
    usedispatch(getMobileData());
  }, []);
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const data = [
    {
      image: "https://shopping.imimg.com/style/ladies-wear.png",
      name: "Ladies wear",
      link: "/womens",
    },
    {
      image: "https://shopping.imimg.com/style/men-wear.png",
      name: "Men Wear",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/mobile-accessories.png",
      name: "Accessories",
      link: "/mobile",
    },
    {
      image: "https://shopping.imimg.com/style/footwear.png",
      name: "Footwear",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/beauty-products.png",
      name: "Beauty",
      link: "/mens",
    },

    {
      image: "https://shopping.imimg.com/style/home-decor.png",
      name: "Home Decore",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/artificial-jewellery.png",
      name: "Jewellery",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/fertilizer.png",
      name: "Fertilizer",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/light.png",
      name: "Light",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/industrial-chemicals.png",
      name: "Chemicals",
      link: "/mens",
    },
  ];

  return (
    <>
      <Navbar />
      <HStack
        w="90%"
        margin="auto"
        display="grid"
        gridTemplateColumns={[
          "1fr 1fr",
          "1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        ]}
        alignItems="center"
      >
        {data.map((el, i) => {
          return (
            <Link to={el.link}>
              <Flex
                direction="column"
                alignItems="center"
                gap={"10px"}
                m="0.5rem"
                key={i + 1}
              >
                <Box>
                  <Image
                    width="60px"
                    boxShadow={"lg"}
                    p={2}
                    borderRadius="50%"
                    height="60px"
                    src={el.image}
                    objectFit="fill"
                  />
                </Box>
                <Text color="black">{el.name}</Text>
              </Flex>
            </Link>
          );
        })}
      </HStack>
      <Box pt={10} w="90%" margin="auto">
        <Image
          width="100%"
          height="100%"
          src="https://shopping.imimg.com/style/bnr_D.webp"
        ></Image>
      </Box>
      <Box pt={6} w="90%" margin="auto">
        <Image
          width="100%"
          height="100%"
          src="https://shopping.imimg.com/style/stmbnr_D1.webp"
        ></Image>
      </Box>

      <Box>
        <Box ml={0} w="90%" mt="5" mb="5">
          <Heading>Mens Wears</Heading>
        </Box>
        {isLoading ? (
          <CardSkeleton />
        ) : isError ? (
          <Heading>😒 Sorry Some problem is server</Heading>
        ) : (
          <Box
            w="90%"
            margin="auto"
            display="grid"
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr",
            ]}
            alignItems="center"
            gap={5}
          >
            {Sop_men_data.length > 0 &&
              Sop_men_data.map((el, i) => {
                return <MensProductCards key={i + 1} {...el} />;
              })}
          </Box>
        )}
        <Button
          onClick={() => setMenCount((pre) => pre + 10)}
          width={{ sm: "50%", md: "25%", lg: "15%" }}
          border="1px solid blue"
          colorScheme="facebook"
          m={3}
        >
          View more
        </Button>
      </Box>
      {/* ************************************************************************* */}
      <hr />
      <Box>
        <Box w="90%" mt="5" mb="5">
          <Heading>Womens Wears</Heading>
        </Box>
        {isLoading ? (
          <CardSkeleton />
        ) : isError ? (
          <Heading>😒 Sorry Some problem is server</Heading>
        ) : (
          <Box
            w="90%"
            margin="auto"
            display="grid"
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr",
            ]}
            alignItems="center"
            gap={5}
          >
            {Sop_women_data.length > 0 &&
              Sop_women_data.map((el, i) => {
                return <WomensProductCards key={i + 1} {...el} />;
              })}
          </Box>
        )}
        <Button
          onClick={() => setwomenCount((pre) => pre + 10)}
          width={{ sm: "50%", md: "25%", lg: "15%" }}
          border="1px solid blue"
          colorScheme="facebook"
          m={3}
        >
          View more
        </Button>
      </Box>
      <hr />
      <Box>
        <Box w="90%" mt="5" mb="5">
          <Heading>Accesories Items</Heading>
        </Box>
        {isLoading ? (
          <CardSkeleton />
        ) : isError ? (
          <Heading>😒 Sorry Some problem is server</Heading>
        ) : (
          <Box
            w="90%"
            margin="auto"
            display="grid"
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr",
            ]}
            alignItems="center"
            gap={5}
          >
            {Sop_Mob_Data.length > 0 &&
              Sop_Mob_Data.map((el, i) => {
                return <MobileAccessoriesCards key={i + 1} {...el} />;
              })}
          </Box>
        )}
        <Button
          onClick={() => setAccCount((pre) => pre + 10)}
          width={{ sm: "50%", md: "25%", lg: "15%" }}
          border="1px solid blue"
          colorScheme="facebook"
          color="white"
        >
          View more
        </Button>
        {/* scroll to top button */}
        <Box>
          <Button
            onClick={scrollToTop}
            colorScheme="facebook"
            position="fixed"
            bottom="60px"
            border="1px solid #2e3192"
            right="15px"
            zIndex="100"
            display={isVisible ? "flex" : "none"}
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            boxShadow="xl"
            bg="white"
            _hover={{ bg: "#7ff789" }}
            // _active={{ bg: "gray.900" }}
            size="md"
          >
            <FaArrowUp color="#2e3192" _hover={{ color: "#f8f3f3" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ShopIndex;
