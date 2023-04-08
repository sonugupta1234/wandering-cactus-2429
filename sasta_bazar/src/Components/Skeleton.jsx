import { Stack, Skeleton } from "@chakra-ui/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <Stack mt="5">
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
    </Stack>
  );
};

export default CardSkeleton;
