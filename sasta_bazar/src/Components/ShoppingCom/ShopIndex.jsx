import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spacer,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import ShoppingCard from "./ShoppingCard";
import { store } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getSop_Accesories,
  getSop_men,
  getSop_Women,
} from "../../Redux/ShoppingReducer/action";
import ShopMenCard from "./ShopMenCard";
import Navbar from "./Navbar";
import ShopWomenCard from "./ShopWomenCard";
import ShopAccCard from "./ShopAccCard";
import {
  getMobileData,
  getWomensData,
} from "../../Redux/ProductReducer/action";
const ShopIndex = () => {
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
      name: "Mobile Accessories",
      link: "/mobile",
    },
    {
      image: "https://shopping.imimg.com/style/footwear.png",
      name: "Footwear",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/beauty-products.png",
      name: "Beauty Products",
      link: "/mens",
    },

    {
      image: "https://shopping.imimg.com/style/home-decor.png",
      name: "Home Decore",
      link: "/mens",
    },
    {
      image: "https://shopping.imimg.com/style/artificial-jewellery.png",
      name: "Artificial Jewellery",
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
      name: "Industrial Chemicals",
      link: "/mens",
    },
  ];

  const Pro = [
    {
      image:
        "https://5.imimg.com/data5/ECOM/Default/2023/1/OZ/BU/TV/70232485/koti-ca026743-f98c-45b3-a752-cce6832061a1-500x500.jpg",
      title: "Shining Maroon Partywear Waistcoat Jacket",
      brands: "Italian Crown",
      price: "₹ 1599",
    link:"http://localhost:3000/mens/5"    },
    {
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/7/QX/RA/RW/153877403/img-20220709-wa0074-500x500.jpg",
      title: "Reyon Digital Bandhani Print Anarkali Kurti Pant Set (Stitched)",
      brands: "Ethenika",
      price: "₹ 1990",
    link:"http://localhost:3000/womens/54"    },
    {
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/10/VG/PK/YQ/13342524/img-2747-500x500.jpg",
      title: "Culver City Coords White Pant Set",
      brands: "Shraddhaa Trends",
      price: "₹ 2300",
    link:""    },
    {
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/12/AQ/EA/HP/4120003/1621858081392-16-23-nmhuaje-originnm80prcnt-500x500.jpg",
      title:
        "Black Formal Trousers For Men Daily Office Wear Formal Pant For Man",
      brands: "Ramshiv Exports",
      price: "₹ 876",

link:""    },
    {
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/12/MX/CE/UR/90086993/53d381e5-mspant50186-12-06cf938a-e9bb-434a-97f8-9a00cf3c13b4-500x500.jpg",
      title: "Men's Grey Mascln Embroidered Joggers",
      brands: "NOZ2TOZ",
      price: "₹ 1019",
    link:""    },
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
        <Box w="90%">
          <Heading>Trending Products</Heading>
        </Box>
        <Box
          pt={5}
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
          {Pro.map((el, i) => {
            return <ShoppingCard key={i + 1} {...el} />;
          })}
        </Box>
      </Box>
      <Box>
        <Box ml={0} w="90%">
          <Heading>Mens Wears</Heading>
        </Box>
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
          {Sop_men_data.map((el, i) => {
            return <ShopMenCard key={i + 1} {...el} />;
          })}
        </Box>
        <Button
          onClick={() => setMenCount((pre) => pre + 10)}
          width="15%"
          border="1px solid blue"
          bg="#2e3192"
          color="white"
          m={3}
          _hover={{ color: "white" }}
        >
          View more
        </Button>
      </Box>
      {/* ************************************************************************* */}
      <hr />
      <Box>
        <Box w="90%">
          <Heading>Womens Wears</Heading>
        </Box>
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
          {Sop_women_data.map((el, i) => {
            return <ShopWomenCard key={i + 1} {...el} />;
          })}
        </Box>
        <Button
          onClick={() => setwomenCount((pre) => pre + 10)}
          width="15%"
          border="1px solid blue"
          bg="#2e3192"
          color="white"
          m={3}
          _hover={{ color: "white" }}
        >
          View more
        </Button>
      </Box>
      <hr />
      <Box>
        <Box w="90%">
          <Heading>Accesories Items</Heading>
        </Box>
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
          {Sop_Mob_Data.map((el, i) => {
            return <ShopAccCard key={i + 1} {...el} />;
          })}
        </Box>
        <Button
          onClick={() => setAccCount((pre) => pre + 10)}
          width="15%"
          border="1px solid blue"
          bg="#2e3192"
          m={3}
          color="white"
          _hover={{ color: "white" }}
        >
          View more
        </Button>
        <Flex
        direction={["column", "column", "row"]}
        color="gray"
        bg="#232324"
        justifyContent="space-between"
        alignItems="center"
        h="80px"
        
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
    </>
  );
};

export default ShopIndex;
