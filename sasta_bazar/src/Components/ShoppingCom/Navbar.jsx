import React, { useState } from "react";
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
import logo from "../../Images/logo.png";
import { useDispatch } from "react-redux";
import { getAllData } from "../../Redux/ProductReducer/action";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    dispatch(getAllData(query));

    navigate("/searchdata");
  };

  return (
    <Box m={3} position="sticky" top="0px" bg="white" p="2" zIndex="100">
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
            <Image pr={10} w={["auto", "auto", "250px"]} src={logo}></Image>
          </Link>
        </Flex>

        <Flex
          p={[, , 2]}
          direction={["column", "column", "row"]}
          gap={["5", "5", "0"]}
          alignItems={["center", "center"]}
        >
          <InputGroup
            pl={10}
            pr={10}
            size="md"
            mt={{ sm: "3", base: "3" }}
            w={{ sm: "120%", base: "120%" }}
          >
            <InputLeftAddon h={12} bg="white" children="Shop" />
            <Input
              h={12}
              placeholder="what are you looking for"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputRightAddon
              onClick={handleSearch}
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
          <Button h={12} pl={10} pr={10} colorScheme="facebook">
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
