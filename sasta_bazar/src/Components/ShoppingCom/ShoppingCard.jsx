import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

const ShoppingCard = ({image,brands,price,title}) => {
  return  (
    <Box  boxShadow={"lg"}>
      <Image
        width="90%"
        height="100%"
        margin="auto"
        src={image}
      ></Image>
      <Heading size="sm">{brands}</Heading>
      <Text pt={4} pb={4} color="black">
        {title}
      </Text>
      <Heading color="blue" size="sm">
        {price}
      </Heading>
      {/* <Button
        width="100%"
        border="1px solid blue"
        bg="white"
        _hover={{ bg: "blue", color: "white" }}
      >
        Buy Now
      </Button> */}
    </Box>
  );
}

export default ShoppingCard