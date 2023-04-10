import { useEffect, useState } from 'react';
import axios from "axios"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    InputGroup,
    InputRightElement,
    useToast
} from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from '../Components/Navbar';
import { adddata, authstatus, getdata } from '../Redux/AuthReducer/action';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../Redux/store';

export default function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [show, setShow] = useState(false)
    const location = useLocation()
    const toast = useToast()
    const userdata = useSelector((store) => store.AuthReducer.userdata)
    const isAuth = useSelector((store) => store.AuthReducer.isAuth)
    const user = useSelector((store) => store.AuthReducer.user)
    const handleSignup = () => {
        const payload = {
            email,
            password,
            username,
            type: "user",
            order:[]
        }
    dispatch(adddata(payload)).then(()=>{
        navigate("/login")
    })
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Flex minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={
                        useColorModeValue('gray.50', 'gray.800')
                    }>
                    <Stack spacing={8}
                        mx={'auto'}
                        maxW={'lg'}
                        py={12}
                        px={6}>
                        <Box rounded={'lg'}
                            bg={
                                useColorModeValue('white', 'gray.700')
                            }
                            boxShadow={'lg'}
                            p={8}>
                            <Stack align={'center'}>
                                <Image src='https://shopping.imimg.com/style/im_logo.jpg' alt='India_Mart_login' />
                                <Heading fontSize={'2xl'}>SignUp to create your new Profile</Heading>
                                <Text fontSize={'lg'}
                                    color={'gray.600'}>
                                    & to enjoy all of our
                                    <Link color={'#F43397'}> Great Quality products </Link>at
                                    <Link color={'#F43397'}> Lowest prices</Link>
                                    ✌️
                                </Text>
                            </Stack>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <Input type="text" value={email} placeholder="Pls Enter Your Emal" onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl id="username">
                                    <FormLabel>Username</FormLabel>
                                    <Input type="text" value={username} placeholder="Pls Enter Your Username" onChange={(e) => setUsername(e.target.value)} />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input type={show ? "text" : "password"} value={password} placeholder="Pls Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                                        <InputRightElement>
                                            <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} >
                                                {show ? <FiEyeOff /> : <FiEye />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack direction={
                                        {
                                            base: 'column',
                                            sm: 'row'
                                        }
                                    }
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox colorScheme='teal' color={'#00A699'}>Remember me</Checkbox>
                                        <Link color={'#00A699'}>Forgot password?</Link>
                                    </Stack>
                                    <Button bg={'#00A699'}
                                        onClick={handleSignup}
                                        color={'white'}
                                        _hover={
                                            { bg: '#00A699' }
                                        }>
                                        Sign Up
                                    </Button>
                                    <Button bg={'#00A699'}
                                        color={'white'}
                                        _hover={
                                            { bg: '#00A699' }
                                        }>
                                        <Link to='/login'>
                                            Login to your Account
                                        </Link>
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </div>
        </div>
    )
}