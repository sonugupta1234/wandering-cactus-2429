import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCards = ({ brands, image, title, price, id }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="350px"
      alignItems="flex-start"
      padding="2%"
    >
      <Image
        src={image}
        alt={brands}
        objectFit="fill"
        h="auto"
        maxHeight="300px"
      />
      <Text>{brands}</Text>
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Button>Buy Now</Button>
    </Box>
  );
};

export default ProductCards;
