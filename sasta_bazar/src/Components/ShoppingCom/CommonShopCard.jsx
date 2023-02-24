import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

const CommonShopCard = ({image,brands,price,title}) => {
  return  (
    <Box  boxShadow={"lg"}>
      <Box overflow={'hidden'}
        maxH='280px'
        minH='280px'
      >
      <Image
        margin="auto"
        src={image}
      ></Image>
      </Box>
      <Heading size="sm">{brands}</Heading>
      <Text p={4} color="black">
        {title.trim().split(' ').splice(0,3).join(' ')}
      </Text>
      <Heading pb={4} color="blue" size="sm">
        {price}
      </Heading>
    </Box>
  );
}

export default CommonShopCard