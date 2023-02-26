import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Heading,
  Select,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import MobileAccessoriesCards from "../Components/MobileAccessoriesCards";

import { getMobileData } from "../Redux/ProductReducer/action";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../Components/ShoppingCom/Navbar";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

//
const MobileAccessories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  let location = useLocation();
  let initOrder = searchParams.get("order");
  const [order, setOrder] = useState(initOrder || "");
  const dispatch = useDispatch();
  const { isLoading, isError, mobile_data } = useSelector(
    (store) => store.ProductReducer
  );
  //sortng logic
  const handleOrder = (e) => {
    setOrder(e.target.value);
  };
  // to persist data on url
  useEffect(() => {
    if (order !== "") {
      let params = {
        order,
      };
      setSearchParams(params);
    }
  }, [order]);
  ///
  let obj = {
    params: {
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };
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
    dispatch(getMobileData(obj));
  }, [location.search]);
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
      {/* //sorting */}
      <Select
        ml={["20px", "25px", "40px", "100px"]}
        w="200px"
        onChange={handleOrder}
      >
        <option p="5" value="">
          Sort By Price
        </option>
        <option p="5" value="desc">
          High to Low
        </option>
        <option p="5" value="asc">
          Low to High
        </option>
      </Select>
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
          {mobile_data &&
            mobile_data.map((el) => (
              <MobileAccessoriesCards key={el.id} {...el} />
            ))}
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

export default MobileAccessories;
