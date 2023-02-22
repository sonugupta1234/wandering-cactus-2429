import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import photo from "../../Images/download-removebg-preview.jpg";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const data = [
    {
      img: "https://shopping.imimg.com/style/ladies-wear.png",
      name: "Ladies wear",
    },
    {
      img: "https://shopping.imimg.com/style/men-wear.png",
      name: "Men Wear",
    },
    {
      img: "https://shopping.imimg.com/style/footwear.png",
      name: "Footwear",
    },
    {
      img: "https://shopping.imimg.com/style/beauty-products.png",
      name: "Beauty Products",
    },
    {
      img: "https://shopping.imimg.com/style/mobile-accessories.png",
      name: "Mobile Accessories",
    },
    {
      img: "https://shopping.imimg.com/style/home-decor.png",
      name: "Home Decore",
    },
    {
      img: "https://shopping.imimg.com/style/artificial-jewellery.png",
      name: "Artificial Jewellery",
    },
    {
      img: "https://shopping.imimg.com/style/fertilizer.png",
      name: "Fertilizer",
    },
    {
      img: "https://shopping.imimg.com/style/light.png",
      name: "Light",
    },
    {
      img: "https://shopping.imimg.com/style/industrial-chemicals.png",
      name: "Industrial Chemicals",
    },
  ];

  const Pro = [
    {
      img: "https://5.imimg.com/data5/ECOM/Default/2023/1/SZ/IF/NN/779497/1650347690836-sku-0052-0-500x500.png",
      title: "Kathi Roll Mayonnaise",
      Company: "Stm Foods Private Limited",
      price: "₹ 150",
    },
    {
      img: "https://5.imimg.com/data5/ECOM/Default/2023/1/LW/QJ/GX/779497/1650347698520-sku-0103-0-500x500.png",
      title: "Vanila Milk Shake Premix",
      Company: "Stm Foods Private Limited",
      price: "₹ 190",
    },
    {
      img: "https://5.imimg.com/data5/ECOM/Default/2023/1/ZW/EP/QI/779497/1650347694086-sku-0034-0-500x500.png",
      title: "Garlic Herb Mayonnaise",
      Company: "Stm Foods Private Limited",
      price: "₹ 320",
    },
    {
      img: "https://5.imimg.com/data5/ECOM/Default/2023/1/LA/YJ/ZV/779497/1650347704623-sku-0092-0-500x500.png",
      title: "Chocolate Milk Shake Premix",
      Company: "Stm Foods Private Limited",
      price: "₹ 250",
    },
    {
      img: "https://5.imimg.com/data5/ECOM/Default/2023/1/SC/LQ/VJ/779497/1650347715072-sku-0014-0-500x500.png",
      title: "Peri Peri Mayonnaise",
      Company: "Stm Foods Private Limited",
      price: "₹ 350",
    },
  ];

  return (
    <Box m={3}>
      <Box w="90%" margin="auto" display="flex" alignItems="center">
        <Image pr={10} width="150px" h={12} src={photo}></Image>
        <InputGroup pl={10} pr={10} size="sm">
          <InputLeftAddon h={12} bg="white" children="Shop" />
          <Input h={12} placeholder="what are you looking for" />
          <InputRightAddon
            bg="#2a6462"
            h={12}
            children={<>{BsSearch}Search</>}
          />
        </InputGroup>
        <Button h={12} bg="blue">
          Bulk Requirement
        </Button>
      </Box>
      {/* ////////////////////////////////////////////////// */}
      <Box
        pt={10}
        w="90%"
        margin="auto"
        display="grid"
        gridTemplateColumns="repeat(10,1fr)"
        alignItems="center"
      >
        {data.map((el, i) => {
          return (
            <Link to="">
              <Flex
                direction={"column"}
                alignItems="center"
                gap={"10px"}
                m="0.5rem"
                key={i + 1}
              >
                <Box>
                  <Image
                    width="100%"
                    boxShadow={"lg"}
                    p={2}
                    borderRadius="40%"
                    height="50px"
                    src={el.img}
                  />
                </Box>
                <Text color="black">{el.name}</Text>
              </Flex>
            </Link>
          );
        })}
      </Box>
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
          <Heading>Featured Products</Heading>
        </Box>
        <Box
          pt={10}
          w="90%"
          margin="auto"
          display="grid"
          gridTemplateColumns="repeat(5,1fr)"
          alignItems="center"
          gap={5}
        >
          {Pro.map((el, i) => {
            return (
              <Box key={i + 1} boxShadow={"lg"}>
                <Image
                  width="90%"
                  height="100%"
                  margin="auto"
                  src={el.img}
                ></Image>
                <Heading size="sm">{el.title}</Heading>
                <Text p={4} color="black">
                  {el.Company}
                </Text>
                <Heading color="blue" size="sm">{el.price}</Heading>
                <Button
                  width="70%"
                  border="1px solid blue"
                  bg="white"
                  _hover={{ bg: "blue", color: "white" }}
                >
                  Buy Now
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

// jhdjhdkahsdjhasklfjldlkjflkdjfljdslfkslfjs
export default Navbar;
