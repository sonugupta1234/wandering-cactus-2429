import { Box, Button, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import MobileAccessoriesCards from "../Components/MobileAccessoriesCards";

import { getMobileData } from "../Redux/ProductReducer/action";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

//
const MobileAccessories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isError, mobile_data } = useSelector(
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
  useEffect(() => {
    dispatch(getMobileData());
  }, []);
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
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
      {isLoading ? (
        <Stack direction="row" spacing={4}>
          <Spinner size="xl" />
        </Stack>
      ) : isError ? (
        <Heading>Error404</Heading>
      ) : (
        mobile_data &&
        mobile_data.map((el) => <MobileAccessoriesCards key={el.id} {...el} />)
      )}
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
  );
};

export default MobileAccessories;
