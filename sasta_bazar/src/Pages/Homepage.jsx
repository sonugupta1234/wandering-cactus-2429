import React from "react";

import {
  Box,
  Heading,
  Button,
  Input,
  Flex,
  Text,
  Image,
  InputGroup,
  InputLeftAddon,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import Carousel from "../Components/Carousel";

export const Homepage = () => {
  return (
    <Box>
      <Box width="100%">
        <Box w={"100%"}>
          <Carousel />
        </Box>
      </Box>
      {/* Hero Section */}

      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Freelance
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Design Projects
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Project
              </Button>
              <Button rounded={"full"}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>

      <Box width="80%" margin="auto" mt={20}>
        <Flex>
          <Box width="30%">
            <Image src="https://hm.imimg.com/imhome_gifs/app-img.png" alt="" />
          </Box>

          <Box width="50%" ml={30}>
            <Box>
              <Heading>Get IndiaMART App</Heading>
              <Text>
                Search for products/services and connect with verified sellers
                on the go!
              </Text>
            </Box>

            <Box mt={30}>
              <Flex>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  <Input type="tel" placeholder="Enter Mobile Number" />
                </InputGroup>
                <Button
                  backgroundColor={"#007A6E"}
                  _hover={{ backgroundColor: "#007A6E" }}
                >
                  Send me the link
                </Button>
              </Flex>
              <Text mt={10}>
                We will send you a link, open it on your phone to download the
                App
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
