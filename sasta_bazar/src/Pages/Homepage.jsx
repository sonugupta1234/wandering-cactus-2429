import React from 'react'
import { Navbar } from '../Components/Navbar'
import {CiLocationOn } from "react-icons/ci"
import {RiArrowDropDownLine} from "react-icons/ri"
import {BsSearch} from "react-icons/bs"
import {BiBuildings} from "react-icons/bi"
import { GiDrill} from "react-icons/gi"
import {Box,Heading,Button,Input,Flex,Text} from "@chakra-ui/react"
import {MdLocalPharmacy } from "react-icons/md"
import {FaIndustry} from "react-icons/fa"
import { MdFastfood} from "react-icons/md"
import Carousel from '../Components/Carousel'
import {SiTrustpilot} from "react-icons/si"
import {VscWorkspaceTrusted} from "react-icons/vsc"

export const Homepage = () => {
  return (
     <Box>
        <Navbar />
        <Box height="230px" border="1px solid white"  backgroundImage="url('https://legacyscs.com/wp-content/uploads/2019/10/Warehouse-RFP-770x253.jpg')"
       >
        
        
          <Heading mt={20} color="white">Search for products & find verified sellers near you</Heading>
          <Box width="80%" height="50px"  margin="auto" mt={10}>
            <Button height="45px" width="15%" fontSize={'17px'}>
            <CiLocationOn />
            <span>All India</span>
            <RiArrowDropDownLine />
            </Button>
            <Input  height="45px" width="40%"  variant='filled' placeholder='Enter product/service name'/>
            <Button height="45px" width="10%" color="white" backgroundColor={"#048277"}>
             < BsSearch />
              Search
            </Button>
          </Box>
      </Box>

      <Box width="100%"  mt={6} >
        <Flex justifyContent={'space-between'}>
        <Box fontSize={"20px"}>
         <Flex>
        <BiBuildings />
        Building & Construction
        </Flex>
        </Box>

        <Box fontSize={"20px"}>
          <Flex>
         < GiDrill />
         Electronics & Electrical
         </Flex>
        </Box>

        <Box  fontSize={"20px"}>
          <Flex>
         < MdLocalPharmacy/>
          Drugs & Pharma
         </Flex>
        </Box>


        <Box  fontSize={"20px"}>
          <Flex>
         < FaIndustry/>
          Industrial Machinery
         </Flex>
        </Box>

        <Box  fontSize={"20px"}>
          <Flex>
         < MdFastfood/>
          Food and Agriculture
         </Flex>
        </Box>

        </Flex>
      </Box>

      <Box width="100%" mt={6}>
        <Flex>
          <Box width="30%" >
           <Heading>
           We connect
            Buyers & Sellers
           </Heading>
           <Text mt={6}>IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</Text>
          
          <Box mt={10}>
            <Flex justifyContent={'space-between'}>
            <Box>
             < SiTrustpilot color="blue"/>
              Trusted Platform
            </Box>

            <Box>
             <VscWorkspaceTrusted color="blue"/>
              Safe & Secure
              </Box>
            </Flex>
          </Box>
          </Box>
          <Box width="70%" >
          <Carousel />
          </Box>
        </Flex>
      </Box>

      
        
    </Box>
  )
}
