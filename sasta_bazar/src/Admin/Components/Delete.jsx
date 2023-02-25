import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { DELETE_PRODUCT } from '../Redux/action'
import { useDispatch } from 'react-redux'


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
            <Button onClick={()=>{handleDelete(id)}} colorScheme='teal' variant='solid'>
                Delete
            </Button>
        </div>
    )
}

export default Delete