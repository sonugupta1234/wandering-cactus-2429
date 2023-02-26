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
import { Update } from './Update'
import  Delete  from './Delete'


export const ProductList = ({ id, image, price, title, brands, category }) => {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td><img width={"30px"} src={image} alt="" /></Td>
            <Td>{title}</Td>
            <Td>{brands}</Td>
            <Td>{category}</Td>
            <Td isNumeric>{price}</Td>
            <Td><Update id={id} price={price} title={title} brands={brands} category={category} image={image} /></Td>
            <Td><Delete id={id} /></Td>
        </Tr>
    )
}