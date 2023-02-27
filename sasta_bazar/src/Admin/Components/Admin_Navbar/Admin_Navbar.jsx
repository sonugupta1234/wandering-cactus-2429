// import React, { useState } from "react";
// import "./Admin_Navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";
// const Admin_Navbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <div>
//       <nav className="main-nav">
//         {/* 1st logo part  */}
//         <div className="logo">
//           <h2>
//             <span>A</span>dmin-
//             <span>P</span>annel
//           </h2>
//         </div>

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <NavLink to="/admin">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/admin_add_product">Add Products</NavLink>
//             </li>
//             <li>
//               <NavLink to="/admin_product_list">Product List</NavLink>
//             </li>
//             {/* <li>
//               <NavLink to="/contact">contact</NavLink>
//             </li> */}
//           </ul>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//          {/*  <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaFacebookSquare className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/thapatechnical/"
//                 target="_thapa">
//                 <FaInstagramSquare className="instagram" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaYoutubeSquare className="youtube" />
//               </a>
//             </li>
//           </ul>
//        */}
//         {/* hamburget menu start  */}
//         <div className="hamburger-menu">
//           <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <GiHamburgerMenu />
//           </a>
//         </div>
//     </div> 
//       </nav >
//     </div >
//   )
// }

// export default Admin_Navbar



import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
const Links = [{ name: 'Dashboard' , to:"/admin" }, { name: 'Add_Products' , to:"/admin_add_product" }, { name: 'Product_List' , to:"/admin_product_list" }];

// const Links = [{ name: 'Dashboard', to: "/admin" }, { name: 'Add_Product', to: "/admin_add_product" }, { name: 'Product_List', to: "/admin_product_list" }];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.to}>
    {children.name}
  </Link>
);

export default function Admin_Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Admin_Pannel</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.to}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
