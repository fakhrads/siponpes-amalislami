import React from 'react'

import { Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";

const Profile = () => {
    return (
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          _dark={{ bg: "gray.800" }}
          px={8}
          mx="auto"
        >
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, md: 2 }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box order={{ base: "initial", md: 2 }}>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                fontSize={{ md: "lg" }}
              >
                “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.” (sambutan ketua yayasan amal islami)
              </chakra.p>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{ bg: "gray.700" }}
            ></Box>
          </SimpleGrid>
        </Box>
      </Flex>
    );
  };

  export default Profile;
  