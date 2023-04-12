import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { GET_PRODUCT } from '../../../Redux/AdminRedux/action';
import { ProductList } from './ProductList';
import Admin_Navbar from '../Admin_Navbar/Admin_Navbar';
export const Product = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_PRODUCT)
    }, [])
    const { products, isLoading, isError } = useSelector((store) => { return { products: store.AdminReducer.products, isLoading: store.ProductReducer.isLoading, isError: store.ProductReducer.isError } }, shallowEqual)
    console.log(products);
    return (
        <div>
           <div>
        <Admin_Navbar />
           </div>
           <div>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Products List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th isNumeric>ID</Th>
                                <Th>Image</Th>
                                <Th>Title</Th>
                                <Th>Brands</Th>
                                <Th>Category</Th>
                                <Th>Price</Th>
                                <Th>Update</Th>
                                <Th>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                    {products.map((el) => (< ProductList key={el.id} {...el} />))}
                        </Tbody>
                    </Table>
                </TableContainer>
                </div>
        </div>
    )
}
