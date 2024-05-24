import React from 'react'
import {
    Flex,
    Box,
    Heading,
    SimpleGrid,
    Image,
  } from "@chakra-ui/react";

function Skills() {
  return (
    <Flex>
    <Box ml={4}>
      <Heading mb={4} size="2xl">
        Skills
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 6 }} spacing={4}>
        <Box>
          <Image
            src="./src/assets/react.png"
            alt="React"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/python.jpg"
            alt="Python"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image src="./src/assets/html.png" alt="HTML" boxSize="100px" />
        </Box>
        <Box>
          <Image src="./src/assets/css.png" alt="CSS" boxSize="100px" />
        </Box>
        <Box>
          <Image
            src="./src/assets/javascript.png"
            alt="Javascript"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/bootstrap.png"
            alt="Bootstrap"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/bulma.png"
            alt="Bulma"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/chakra.png"
            alt="Chakra"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/firebase.png"
            alt="Firebase"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/jupyter.png"
            alt="Jupyter Notebook"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/node-express.png"
            alt="Node JS Express"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="./src/assets/mysql.png"
            alt="MySQL"
            boxSize="100px"
          />
        </Box>
      </SimpleGrid>
    </Box>
  </Flex>
  )
}

export default Skills
