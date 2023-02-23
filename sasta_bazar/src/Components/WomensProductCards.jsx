import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const WomensProductCards = ({ brands, image, title, price, id }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="350px"
      alignItems="flex-start"
      padding="2%"
      boxShadow="md"
      gap="2"
      rounded="lg"
      mb={10}
      p="5"
    >
      <Link to={`/womens/${id}`}>
        <Image
          src={image}
          alt={brands}
          objectFit="fill"
          h="500px"
          w="500px"
          maxHeight="300px"
        />
      </Link>
      <Box h="45px" overflow="hidden">
        <Text te>{title}</Text>
      </Box>
      <Box h="20px" overflow="hidden">
        <Text fontSize="md" color="gray">
          {brands}
        </Text>
      </Box>

      <Text fontSize="xl" fontWeight="semibold" color="#2e3192">
        {price}
      </Text>
      <Button
        variant="outline"
        color="#2e3192"
        border="1px solid #2e3192"
        _hover={{ background: "#2e3192", color: "white" }}
        width="100%"
        m="auto"
      >
        <Link to={`/womens/${id}`}>Buy Now</Link>
      </Button>
    </Box>
  );
};

export default WomensProductCards;
