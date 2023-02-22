import React from 'react'
import photo from "../Images/download-removebg-preview.jpg"
import {CiShoppingTag} from "react-icons/ci"
import {SiHomeassistantcommunitystore} from "react-icons/si"
import {FiHelpCircle} from "react-icons/fi"
import {RiMessage2Line} from "react-icons/ri"
import {IoMdContact} from "react-icons/io"
import {RiArrowDropDownLine} from "react-icons/ri"
import {Box,Text,Flex,Image} from "@chakra-ui/react"

export const Navbar = () => {
  return (
     <Box width= "100%" height= "80px" backgroundColor={'#2E3192'}>
      <Flex justifyContent={'space-between'}>
       <Box width="15%">
         <Image width="80%" height="80px" src={photo} alt=""/>
       </Box>

       <Box width="30%" height="70px" mt={5} >
        <Flex justifyContent={'space-between'}>
        <Box>
        <CiShoppingTag fontSize={"25px"} color="white"/>
        <Text color="white" >Shopping</Text>
        </Box>

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

        <Box>
        <IoMdContact fontSize={"25px"} color="white"/>
        <Text color="white" >
          <Flex>
          Sign In 
          <RiArrowDropDownLine />
          </Flex>
          </Text>
        </Box>
        </Flex>
       </Box>
       </Flex>
     </Box>
  )
}
