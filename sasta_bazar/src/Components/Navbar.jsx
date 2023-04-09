import { ReactNode } from "react";
import {
  Box,
  Center,
  Heading,
  Flex,
  Avatar,
  HStack,
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
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../Images/logo.png"
import user from "../Images/user.png"
import { useSelector } from "react-redux";
import { store } from "../Redux/store";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((store) => store.AuthReducer.user)
  const isAuth = useSelector((store) => store.AuthReducer.isAuth)
  return (
    <>
      <Box px={4} bg="#f7fafc" position="sticky" top="0px" zIndex="100">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src={logo}
                alt="logo"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link fontWeight={"semibold"} to={"/shop"}>
                Shopping
              </Link>
              <Link fontWeight={"semibold"} to="#">
                Help
              </Link>
              <Link fontWeight={"semibold"} to="#">
                Message
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>

            {isAuth ?
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={user}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>{user.username}</MenuItem>
                  <MenuItem >
                    < BackdropExample />
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> :
              <Link to="/login">
                <Button
                  as={'a'}
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'white'}
                  bg="#00A699"
                  href={'#'}
                  _hover={"#00A699"}>
                  Sign In
                </Button>
              </Link>
            }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link fontWeight={"semibold"} href="/shop">
                Shopping
              </Link>
              <Link fontWeight={"semibold"} href="#">
                Help
              </Link>
              <Link fontWeight={"semibold"} href="#">
                Message
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
export { Navbar };


export const BackdropExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>User Details</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <UserDetails />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export const UserDetails = () => {
  const user = useSelector((store) => store.AuthReducer.user)
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={user}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {user.username}
            </Heading>
            <Text color={'gray.500'}>{user.email}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.type}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Account Type
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.order.length}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Items Ordered
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Center>

  )
}