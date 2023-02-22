import { Box, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCards from "../Components/ProductCards";
import { getMensData } from "../Redux/ProductReducer/action";
const Mens = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, mens_data } = useSelector(
    (store) => store.ProductReducer
  );
  //   console.log(mens_data, isLoading)
  useEffect(() => {
    dispatch(getMensData());
  }, []);
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr">
      {isLoading ? (
        <Stack direction="row" spacing={4}>
          <Spinner size="xl" />
        </Stack>
      ) : isError ? (
        <Heading>Error404</Heading>
      ) : (
        mens_data.map((el) => <ProductCards key={el.id} {...el} />)
      )}
    </Box>
  );
};

export default Mens;
