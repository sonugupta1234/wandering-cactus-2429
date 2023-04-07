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
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <Box m={3} position="sticky" top="0px" p="2" zIndex="100" bg="red.100">
      <Flex
        w="90%"
        margin="auto"
        gap={[0, "5", "0"]}
        direction={["column", "column", "row"]}
        alignItems={["", "center"]}
        justifyContent={[, , "space-around"]}
      >
        <Flex>
          <Link to="/shop">
            <Image
              pr={10}
              w={["auto", "auto", "250px"]}
              src="https://shopping.imimg.com/style/im_logo.jpg"
            ></Image>
          </Link>
        </Flex>

        <Flex
          p={[, , 2]}
          direction={["column", "column", "row"]}
          gap={["5", "5", "0"]}
          alignItems={["", "center"]}
          display={["none", "flex"]}
        >
          {" "}
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
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
