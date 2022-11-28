import React from 'react'
import { Outlet, Link } from "react-router-dom";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "@choc-ui/logo";

const Layout = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <>
      <React.Fragment>
        <chakra.header
          backgroundColor="rgba(255, 255, 255, 0.8)" 
          backdropFilter="saturate(180%) blur(5px)"
          bg={bg}
          w="full"
          position="fixed"
          px={{ base: 2, sm: 4 }}
          py={5}
          zIndex={100} 
          shadow="md"
        >
          <Flex alignItems="center"  justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <Logo />
                <VisuallyHidden>Yayasan Amal Islami</VisuallyHidden>
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Yayasan Amal Islami
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Link to="/blogs">
                  <Button variant="ghost">Blogs</Button>
                </Link>
                <Button variant="ghost">Company</Button>
              </HStack>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{ color: "inherit" }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Link to="/blogs">Blogs</Link>
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                  <Button w="full" variant="ghost">
                    Company
                  </Button>
                  <Button w="full" variant="ghost">
                    Sign in
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
          <Outlet />

      </React.Fragment>
    </>
  )
};

export default Layout;