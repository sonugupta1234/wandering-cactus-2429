import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

const CommonShopCard = ({image,brands,price,title}) => {
  return  (
    <Box  boxShadow={"lg"}>
      <Image
        width="100%"
        height="100%"
        margin="auto"
        src={image}
      ></Image>
      <Heading size="sm">{brands}</Heading>
      <Text p={4} color="black">
        {title}
      </Text>
      <Heading color="blue" size="sm">
        {price}
      </Heading>
    </Box>
  );
}

export default CommonShopCard