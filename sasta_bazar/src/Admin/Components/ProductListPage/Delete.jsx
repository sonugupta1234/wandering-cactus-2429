import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { DELETE_PRODUCT } from '../../../Redux/AdminRedux/action';


const Delete = ({ id }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        const payload= {
            id
        }
        dispatch(DELETE_PRODUCT(id))
    }
    return (
        <div>
            <Button  flex={1}
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
                        }} onClick={()=>{handleDelete(id)}}>
                Delete
            </Button>
        </div>
    )
}

export default Delete