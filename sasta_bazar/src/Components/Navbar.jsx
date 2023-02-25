import React, { useState } from 'react'
import photo from "../Images/2019-02-17-removebg-preview.jpg"
import {CiShoppingTag} from "react-icons/ci"
import {SiHomeassistantcommunitystore} from "react-icons/si"
import {FiHelpCircle} from "react-icons/fi"
import {RiMessage2Line} from "react-icons/ri"
import {IoMdContact} from "react-icons/io"
import {RiArrowDropDownLine} from "react-icons/ri"

import { Link } from 'react-router-dom'

import {RxHamburgerMenu} from "react-icons/rx"
import {GrClose} from "react-icons/gr"
import {Box,Text,Flex,Image,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useToast,useDisclosure, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Button, IconButton, Stack, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const toast = useToast()

  const { 
    isOpen: isOpenMen, 
    onOpen: onOpenMen, 
    onClose: onCloseMen
  } = useDisclosure()

  const { 
    isOpen: isOpenSign, 
    onOpen: onOpenSign, 
    onClose: onCloseSign
  } = useDisclosure()


  let newdata={
    email,
    password
  }

  const handleSubmit=()=>{
    dispatch(adddata(newdata))
  }
  return (
    
     <Box w={{lg: "100%", base: "28%"}}  h={{lg: "80px", base: "50px"}} backgroundColor={'#2E3192'} position={'fixed'} zIndex={1}>
      <Flex justifyContent={ 'space-between'}>
       <Box w={{lg: "15%", base: "40%"}}>
         <Image w={{lg: "80%", base: "100%"}} h={{lg: "80px", base: "45px"}} src={photo} alt=""/>
       </Box>


       {/* <Box width="30%" height="70px" mt={5} >
        <Flex justifyContent={'space-between'}>
       </Box> */}

       
       <IconButton
       size={'sm'}
       icon={isOpenMen ? <GrClose /> : <RxHamburgerMenu/>}
       aria-label={'Open Menu'}
       mt={3}
       display={{ md: 'none' }}
       
       onClick={isOpenMen ? onCloseMen : onOpenMen}
     />
     

       <Box width="30%" height="70px" mt={5}  display={{base: 'none',md: 'flex'}}  justifyContent={{md: 'space-between'}}>
        
        <Box>

        <CiShoppingTag fontSize={"25px"} color="white"/>
        <Text color="white" >Shopping</Text>
        </Box>
       {/* </Link> */}

        <Box>
        <SiHomeassistantcommunitystore fontSize={"25px"} color="white"/>
        <Text color="white" >Sell</Text>
        </Box>

        <Box>
        <FiHelpCircle fontSize={"25px"} color="white"/>
        <Text color="white" >Help</Text>
        </Box>

        <Box>
        <RiMessage2Line  fontSize={"25px"} color="white"/>
        <Text color="white" >Messages</Text>
        </Box>

        <Box onClick={onOpenSign} cursor="pointer">
        <IoMdContact fontSize={"25px"} color="white"/>
        <Text color="white" >
          <Flex>
          Sign In 
          <RiArrowDropDownLine />
          </Flex>
          </Text>
        </Box>
        
       </Box>
       </Flex>






       <Modal
       
       isOpen={isOpenSign}
       onClose={onCloseSign}
     >
       <ModalOverlay />
       <ModalContent>
         <ModalHeader>Create your account</ModalHeader>
         <ModalCloseButton />
         <ModalBody pb={6}>
          <form id="for" onSubmit={handleSubmit}>
           <FormControl isRequired>
             <FormLabel>First name</FormLabel>
             <Input  placeholder='First name' />
           </FormControl>

           <FormControl mt={4} isRequired>
             <FormLabel>Last name</FormLabel>
             <Input placeholder='Last name' />
           </FormControl>

           <FormControl mt={4} isRequired>
             <FormLabel>Mobile No</FormLabel>

             <InputGroup >
             <InputLeftAddon children={'+91'} />
             <Input type="number" placeholder='Enter Mobile No' />
             </InputGroup>
           </FormControl>

           <FormControl mt={4} isRequired>
             <FormLabel>Email</FormLabel>
             <Input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </FormControl>

           <FormControl mt={4} isRequired>
             <FormLabel>Password</FormLabel>
             <Input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
           </FormControl>
           </form>
         </ModalBody>

         <ModalFooter>
           <Button colorScheme='blue' mr={3} onClick={() =>
       toast({
         position: 'top-middle',
         title: 'Account created.',
         description: "We've created your account for you.",
         status: 'success',
         duration: 9000,
         isClosable: true,
       })
     } type="submit" id="for">
             Submit
           </Button>
           <Button onClick={onCloseSign}>Cancel</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>



{isOpenMen ? (
  <Box pb={4} display={{ md: 'none' }}>
    <Stack as={'nav'} spacing={4}>
    <Menu isOpen={isOpenMen}  >
       <MenuButton

         rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        color="white"
        border="none"
        h="30px"
        fontSize="md"
        
        minW={0}>
        
          
        {/* <CiShoppingTag />
        <Text>Shopping</Text> */}
      </MenuButton> 

      <MenuList>
    <MenuItem> <CiShoppingTag />
        <Text>Shopping</Text></MenuItem>
    <MenuItem><SiHomeassistantcommunitystore />
    <Text>Sell</Text>
    </MenuItem>
    <MenuItem> <FiHelpCircle />
        <Text>Help</Text></MenuItem>
    <MenuItem><RiMessage2Line/>
        <Text>Messages</Text></MenuItem>
    <MenuItem><IoMdContact />
        <Text >
          <Flex>
          Sign In 
          <RiArrowDropDownLine />
          </Flex>
          </Text></MenuItem>
  </MenuList>
      </Menu>
      </Stack>
      </Box>): null}
</Box>
     
  )
}
