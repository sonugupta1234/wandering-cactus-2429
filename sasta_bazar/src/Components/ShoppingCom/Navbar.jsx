import React, { useEffect, useState } from "react";
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
import ShoppingCard from "./ShoppingCard";
import { store } from "../../Redux/store";
import { useDispatch, useSelector } from 'react-redux'
import { getSop_Accesories, getSop_men, getSop_Women } from "../../Redux/ShoppingReducer/action";
import CommonShopCard from "./CommonShopCard";

const Navbar = () => {
  const[menCount,setMenCount]=useState(10)
  const[womenCount,setwomenCount]=useState(10)
  const[AccCount,setAccCount]=useState(10)
  const {isLoading,isError,Sop_men_data,Sop_women_data,Sop_Mob_Data}=useSelector((store)=>store.shopReducer)
console.log(menCount)

  const usedispatch=useDispatch()
 useEffect(()=>{
  usedispatch(getSop_men(menCount))
  usedispatch(getSop_Women(womenCount))
  usedispatch(getSop_Accesories(AccCount))
 },[menCount,AccCount,womenCount])

  const data = [
    {
      image: "https://shopping.imimg.com/style/ladies-wear.png",
      name: "Ladies wear",
    },
    {
      image: "https://shopping.imimg.com/style/men-wear.png",
      name: "Men Wear",
    },
    {
      image: "https://shopping.imimg.com/style/footwear.png",
      name: "Footwear",
    },
    {
      image: "https://shopping.imimg.com/style/beauty-products.png",
      name: "Beauty Products",
    },
    {
      image: "https://shopping.imimg.com/style/mobile-accessories.png",
      name: "Mobile Accessories",
    },
    {
      image: "https://shopping.imimg.com/style/home-decor.png",
      name: "Home Decore",
    },
    {
      image: "https://shopping.imimg.com/style/artificial-jewellery.png",
      name: "Artificial Jewellery",
    },
    {
      image: "https://shopping.imimg.com/style/fertilizer.png",
      name: "Fertilizer",
    },
    {
      image: "https://shopping.imimg.com/style/light.png",
      name: "Light",
    },
    {
      image: "https://shopping.imimg.com/style/industrial-chemicals.png",
      name: "Industrial Chemicals",
    },
  ];

  const Pro = [
    {
      image: "https://5.imimg.com/data5/ECOM/Default/2023/1/SZ/IF/NN/779497/1650347690836-sku-0052-0-500x500.png",
      brands: "Kathi Roll Mayonnaise",
      title: "Stm Foods Private Limited",
      price: "₹ 150",
    },
    {
      image: "https://5.imimg.com/data5/ECOM/Default/2023/1/LW/QJ/GX/779497/1650347698520-sku-0103-0-500x500.png",
      brands: "Vanila Milk Shake Premix",
      title: "Stm Foods Private Limited",
      price: "₹ 190",
    },
    {
      image: "https://5.imimg.com/data5/ECOM/Default/2023/1/ZW/EP/QI/779497/1650347694086-sku-0034-0-500x500.png",
      brands: "Garlic Herb Mayonnaise",
      title: "Stm Foods Private Limited",
      price: "₹ 320",
    },
    {
      image: "https://5.imimg.com/data5/ECOM/Default/2023/1/LA/YJ/ZV/779497/1650347704623-sku-0092-0-500x500.png",
      brands: "Chocolate Milk Shake Premix",
      title: "Stm Foods Private Limited",
      price: "₹ 250",
    },
    {
      image: "https://5.imimg.com/data5/ECOM/Default/2023/1/SC/LQ/VJ/779497/1650347715072-sku-0014-0-500x500.png",
      brands: "Peri Peri Mayonnaise",
      title: "Stm Foods Private Limited",
      price: "₹ 350",
    },
  ];

  return <Box m={3}>
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
                    src={el.image}
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
          {Pro.map((el,i) => {
            return <ShoppingCard key={i+1} {...el}/>
          })}
        </Box>
      </Box>
      <Box>
        <Box w="90%">
          <Heading>Mens Wears</Heading>
        </Box>
        <Box
          w="90%"
          margin="auto"
          display="grid"
          gridTemplateColumns="repeat(5,1fr)"
          alignItems="center"
          gap={5}
        >
          {Sop_men_data.map((el,i) => {
            return <CommonShopCard key={i+1} {...el}/>
          })}
        </Box>
        <Button onClick={()=>setMenCount(pre=>pre+10)}
        width="15%"
        border="1px solid blue"
        bg= "blue"
        color= "white" 
        _hover={{color: "white" }}
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
          gridTemplateColumns="repeat(5,1fr)"
          alignItems="center"
          gap={5}
        >
          {Sop_women_data.map((el,i) => {
            return <CommonShopCard key={i+1} {...el}/>
          })}
        </Box>
        <Button  onClick={()=>setwomenCount(pre=>pre+10)}
        width="15%"
        border="1px solid blue"
        bg= "blue"
        color= "white" 
        _hover={{color: "white" }}
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
          gridTemplateColumns="repeat(5,1fr)"
          alignItems="center"
          gap={5}
        >
          {Sop_Mob_Data.map((el,i) => {
            return <CommonShopCard key={i+1} {...el}/>
          })}
        </Box>
        <Button onClick={()=>setAccCount(pre=>pre+10)}
        width="15%"
        border="1px solid blue"
        bg= "blue"
        color= "white" 
        _hover={{color: "white" }}
      >
        View more
      </Button>
      </Box>
    </Box>
};
export default Navbar;
