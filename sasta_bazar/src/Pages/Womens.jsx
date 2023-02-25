import {
  Box,
  Heading,
  Spinner,
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
import WomensProductCards from "../Components/WomensProductCards";
import { getWomensData } from "../Redux/ProductReducer/action";
import Navbar from "../Components/ShoppingCom/Navbar";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
const Womens = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isError, womens_data } = useSelector(
    (store) => store.ProductReducer
  );
  //   console.log(mens_data, isLoading)
  useEffect(() => {
    dispatch(getWomensData());
  }, []);
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
      <Breadcrumb
        spacing="10px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml={["20px", "25px", "40px", "100px"]}
        mt="5"
        mb="5"
        fontSize="lg"
      >
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/shop">Shop</Link>
        </BreadcrumbItem>
      </Breadcrumb>
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
          womens_data &&
          womens_data.map((el) => <WomensProductCards key={el.id} {...el} />)
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
    </Box>
  );
};

export default Womens;
