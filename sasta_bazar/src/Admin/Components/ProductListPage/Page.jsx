import React from 'react'
import Pagination from "@choc-ui/paginator";
import { Flex, Spacer } from '@chakra-ui/react'
export const Page = ({ page, total,setPage , handleChange}) => {
    const [current, setCurrent] = React.useState(page);
    return (
        <Flex
            w="full"
            bg={"gray.400"}
            _dark={{
                bg: "gray.600",
            }}
            p={50}
            alignItems="center"
            justifyContent="center"
        >
            <Pagination
                defaultCurrent={2}
                total={50}
                paginationProps={{
                    display: "flex",
                }}
                current={page}
                onChange={(page)=>handleChange(page)}
                onChange={(page)=>setPage(page)}
                onChange={(page) => setCurrent(page)}
            />
        </Flex>
    );
}
