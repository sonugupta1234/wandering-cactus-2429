import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const ShopAccCard = ({image,brands,price,title,id}) => {
  return  (
    <Box  boxShadow={"lg"}>
      <Box overflow={'hidden'}
        maxH='280px'
        minH='280px'
      >
      <Link to={`/mobile/${id}`}>
      <Image
        margin="auto"
        src={image}
      ></Image>
      </Link>
      </Box>
      <Heading size="sm">{brands}</Heading>
      <Text p={4} color="black">
        {title.trim().split(' ').splice(0,3).join(' ')}
      </Text>
      <Heading pb={4} color="#2e3192" size="sm">
        {price}
      </Heading>
    </Box>
  );
}

export default ShopAccCard