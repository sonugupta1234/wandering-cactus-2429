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
  Icon
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { BsSearch } from "react-icons/bs";

import ShoppingCard from "./ShoppingCard";
import { store } from "../../Redux/store";
import { useDispatch, useSelector } from 'react-redux'
import { getSop_Accesories, getSop_men, getSop_Women } from "../../Redux/ShoppingReducer/action";
import CommonShopCard from "./CommonShopCard";
import Navbar from "./Navbar";
const ShopIndex = () => {
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
      link:"/womens"

    },
    {
      image: "https://shopping.imimg.com/style/men-wear.png",
      name: "Men Wear",
      link:"/mens"
    },
    {
      image: "https://shopping.imimg.com/style/mobile-accessories.png",
      name: "Mobile Accessories",
      link:"/mobile"
    },
    {
      image: "https://shopping.imimg.com/style/footwear.png",
      name: "Footwear",
      link:"/mens"
    },
    {
      image: "https://shopping.imimg.com/style/beauty-products.png",
      name: "Beauty Products",
      link:"/mens"
    },
  
    {
      image: "https://shopping.imimg.com/style/home-decor.png",
      name: "Home Decore",
      link:"/mens"
    },
    {
      image: "https://shopping.imimg.com/style/artificial-jewellery.png",
      name: "Artificial Jewellery",
      link:"/mens"
    },
    {
      image: "https://shopping.imimg.com/style/fertilizer.png",
      name: "Fertilizer",
      link:"/mens"
    },
    {
      image: "https://shopping.imimg.com/style/light.png",
      name: "Light",
      link:"/mens"
    },
    {
      image: "https://shopping.imimg.com/style/industrial-chemicals.png",
      name: "Industrial Chemicals",
      link:"/mens"
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

  return (
    <>
    <Navbar/>
     <HStack
        pt={10}
        w="90%"
        margin="auto"
        display="grid"
        gridTemplateColumns={["1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"]}
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
      <Box >
        <Box  w="90%">
          <Heading>Featured Products</Heading>
        </Box>
        <Box
          pt={10}
          w="90%"
          margin="auto"
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr" ]}
          alignItems="center"
          gap={5}
        >
          {Pro.map((el,i) => {
            return <ShoppingCard key={i+1} {...el}/>
          })}
        </Box>
      </Box>
      <Box >
        <Box ml={0} w="90%">
          <Heading   >Mens Wears</Heading>
        </Box>
        <Box 
          w="90%"
          margin="auto"
          display="grid"
          gridTemplateColumns={["1fr", "1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr" ]}
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
        m={3}
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
          gridTemplateColumns={["1fr", "1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr" ]}
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
       m={3}
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
          gridTemplateColumns={["1fr", "1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr" ]}
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
        m={3}
        color= "white" 
        _hover={{color: "white" }}
      >
        View more
      </Button>
      </Box></>
  )
}

export default ShopIndex