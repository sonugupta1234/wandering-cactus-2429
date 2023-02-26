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
            <Button onClick={()=>{handleDelete(id)}} colorScheme='teal' variant='solid'>
                Delete
            </Button>
        </div>
    )
}

export default Delete