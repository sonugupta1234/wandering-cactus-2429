import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Radio,
    HStack,
    Button,
    Select
} from '@chakra-ui/react'
import { useState } from 'react'
import { createProduct } from '../Redux/action'
import Navbar from './Navbar/Navbar'
import "./NewProduct.css"

const initalState = {
    "image": "",
    "title": "",
    "brands": "",
    "price": 0,
    "category": "mens"
}


export const NewProduct = () => {
    const [product, setProduct] = useState(initalState)
    //console.log(product);
    const handleChange = (e) => {
        const { name, value } = e.target;
        //console.log(e.target.value)
        setProduct((prev) => { return { ...prev, [name]: name === "price" ? +value : value } })
        //console.log(product)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product)
        //console.log(product)
        setProduct(initalState)
    }
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input type='text' name='title' value={product.title} onChange={(e) => { handleChange(e) }} />
                        <FormLabel>Image Link</FormLabel>
                        <Input type='url' name='image' value={product.image} onChange={(e) => { handleChange(e) }} />
                        <FormLabel>Brand</FormLabel>
                        <Input type='text' name='brands' value={product.brands} onChange={(e) => { handleChange(e) }} />
                        <FormLabel>Price</FormLabel>
                        <Input type='number' name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                        <FormLabel as='legend'>Select The Category</FormLabel>
                        <Select placeholder='Select option' name='category' onChange={(e) => handleChange(e)} >
                            <option value='mens'>Mens </option>
                            <option value='womens'>Womens</option>
                            <option value='mobile_accessories'>Mobile Accessories</option>
                        </Select>
                        <Button colorScheme='teal' variant='outline' type='submit'>
                            Add Products
                        </Button>
                    </FormControl>
                </form>
            </div>
        </>
    )
}