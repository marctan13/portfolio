import { Flex, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import { useTheme } from '@emotion/react'
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const theme = useTheme();
  const brand700 = theme.colors.brand[700];
  return (
    <Flex direction="column" bg={brand700} minHeight="100vh">
      <Flex direction="column" align="center" justify="center" width="100%" py={5}>
        <Heading>Projects</Heading>
        <Box>
        <ProjectCard />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Projects
