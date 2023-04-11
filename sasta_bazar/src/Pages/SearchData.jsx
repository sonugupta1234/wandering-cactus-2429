import { Box, Heading, Button, Stack, Skeleton } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { FaArrowUp } from "react-icons/fa";

import Navbar from "../Components/ShoppingCom/Navbar";
import { useState } from "react";
import SearchDataCards from "../Components/SearchDataCards";

const SearchData = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isLoading, isError, all_data } = useSelector(
    (store) => store.ProductReducer
  );

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box>
      <Navbar />

      {/* /// */}
      {isLoading ? (
        <Stack w="90vw" h="100vh" ml="auto" mr="auto">
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
          <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
        </Stack>
      ) : isError ? (
        <Heading>Error404</Heading>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={[
            "1fr",
            "1fr 1fr",
            "1fr 1fr",
            "1fr 1fr 1fr",
            "1fr 1fr 1fr 1fr",
          ]}
          ml={[5, 5, 10, 20, 20, 20]}
          mr={[5, 5, 10, 20, 20, 20]}
          gap="10"
        >
          {all_data.length > 0 &&
            all_data.map((el) => <SearchDataCards key={el.id} {...el} />)}
          <Box>
            <Button
              onClick={scrollToTop}
              position="fixed"
              bottom="60px"
              border="1px solid #2e3192"
              right="15px"
              zIndex="100"
              display={isVisible ? "flex" : "none"}
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxShadow="xl"
              bg="white"
              _hover={{ bg: "#7ff789" }}
              // _active={{ bg: "gray.900" }}
              size="md"
            >
              <FaArrowUp color="#2e3192" _hover={{ color: "#f8f3f3" }} />
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchData;

// import { Box } from "@chakra-ui/react";
// import React from "react";

// import MensProductCards from "../Components/MensProductCards";
// import Navbar from "../Components/ShoppingCom/Navbar";
// import { useSelector } from "react-redux";
// const SearchData = () => {
//   const { isLoading, isError, all_data } = useSelector(
//     (store) => store.ProductReducer
//   );
//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <Box
//           display="grid"
//           gridTemplateColumns={[
//             "1fr",
//             "1fr 1fr",
//             "1fr 1fr",
//             "1fr 1fr 1fr",
//             "1fr 1fr 1fr 1fr",
//           ]}
//           ml={[5, 5, 10, 20, 20, 20]}
//           mr={[5, 5, 10, 20, 20, 20]}
//           gap="10"
//         >
//           {all_data.length > 0 &&
//             all_data.map((el) => <MensProductCards key={el.id} {...el} />)}
//         </Box>
//       </div>
//     </>
//   );
// };

// export default SearchData;
