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
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box m={3} position="sticky" top="0px" zIndex="100" bg="white">
      <Box
        w="90%"
        margin="auto"
        display="flex"
        direction={["column", "row", "row"]}
        alignItems="center"
      >
        <Image
          pr={10}
          width="auto"
          h={12}
          src="https://shopping.imimg.com/style/im_logo.jpg"
        ></Image>
        <InputGroup pl={10} pr={10} size="md">
          <InputLeftAddon h={12} bg="white" children="Shop" />
          <Input h={12} placeholder="what are you looking for" />
          <InputRightAddon
            bg="#2a6462"
            h={12}
            color="white"
            children={
              <>
                <BsSearch />
                Search
              </>
            }
          />
        </InputGroup>
        <Button h={12} pl={8} pr={8} bg="#2e3192" color="white">
          Bulk Requirement
        </Button>
        <Link to="/cart">
          <Box>
            <Flex alignItems="center" ml={3}>
              <Icon fontSize={"3rem"} as={AiOutlineShoppingCart} />
              <Heading size="md">Cart</Heading>
            </Flex>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
export default Navbar;
