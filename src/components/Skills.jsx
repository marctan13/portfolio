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
            src="/skills/react.png"
            alt="React"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/python.jpg"
            alt="Python"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image src="/skills/html.png" alt="HTML" boxSize="100px" />
        </Box>
        <Box>
          <Image src="/skills/css.png" alt="CSS" boxSize="100px" />
        </Box>
        <Box>
          <Image
            src="/skills/javascript.png"
            alt="Javascript"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/bootstrap.png"
            alt="Bootstrap"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/bulma.png"
            alt="Bulma"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/chakra.png"
            alt="Chakra"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/firebase.png"
            alt="Firebase"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/jupyter.png"
            alt="Jupyter Notebook"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/node-express.png"
            alt="Node JS Express"
            boxSize="100px"
          />
        </Box>
        <Box>
          <Image
            src="/skills/mysql.png"
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
