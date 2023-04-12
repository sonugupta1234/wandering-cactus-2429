import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
    FormLabel,
    Textarea,
    Input,
    InputRightAddon,
    InputLeftAddon,
    InputGroup,
    Select
} from '@chakra-ui/react'

import { GrAdd } from 'react-icons/gr';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UPDATE_PRODUCT } from '../../../Redux/AdminRedux/action';

export const Update = ({ id, image, price, title, brands, category }) => {
    const [_id, setId] = useState(id)
    const [_image, setImage] = useState(image)
    const [_title, setTitle] = useState(title)
    const [_brands, setBrands] = useState(brands)
    const [_category, setCategory] = useState(category)
    const [_price, setPrice] = useState(price)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    const dispatch = useDispatch()

    const handleUpdate = () => {
        const data = {
            id: _id,
            image: _image,
            price: +_price,
            title: _title,
            brands: _brands,
            category: _category
        }
        //console.log(data)
        dispatch(UPDATE_PRODUCT(data))
    }


    return (
        <>
            <Button flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                    bg: 'blue.500',
                }}
                _focus={{
                    bg: 'blue.500',
                }}
                onClick={onOpen}>
                Update
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Update Product Details
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel >Image Link</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon>http://</InputLeftAddon>
                                    <Input
                                        value={_image}
                                        type='url'
                                        id='url'
                                        placeholder='Please enter domain'
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                    <InputRightAddon>.com</InputRightAddon>
                                </InputGroup>
                            </Box>
                            <Box>
                                <FormLabel >Title</FormLabel>
                                <Input
                                    value={_title}
                                    ref={firstField}
                                    placeholder='Please enter Product Title'
                                    onChange={(e) => setTitle(e.target.value)}

                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='username'>Brands</FormLabel>
                                <Input
                                    value={_brands}
                                    ref={firstField}
                                    placeholder='Please enter item Brand'
                                    onChange={(e) => setBrands(e.target.value)}

                                />
                            </Box>

                            <Box>
                                <FormLabel >Category</FormLabel>
                                <Select defaultValue={category}>
                                    <option value='mens'>Mens </option>
                                    <option value='womens'>Womens</option>
                                    <option value='mobile_accessories'>Mobile Accessories</option>
                                </Select>
                            </Box>
                            <Box>
                                <FormLabel htmlFor='username'>Price</FormLabel>
                                <Input
                                    value={_price}
                                    ref={firstField}
                                    placeholder='Please enter item Price'
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={handleUpdate}>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}