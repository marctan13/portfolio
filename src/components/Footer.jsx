import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import SocialLinks from './SocialLinks';


function Footer() {
    const theme = useTheme();
    const brand900 = theme.colors.brand[900];
    const brand500 = theme.colors.brand[500];
  return (
    <Flex 
    direction={{ base: "column", md: "row" }}
      align="center" 
      justify="space-evenly" // Spread items horizontally
      p={4} 
      bg={brand900}
      color={brand500}
    >
      <Box>
        <Text align="center"><strong>Phone:</strong><br/> 209-353-7904</Text>
      </Box>
      <Box>
        <Text align="center"><strong>Email:</strong><br/> marctan13@gmail.com</Text>
      </Box>
      <Box>
        <Text align="center"><strong>Links</strong></Text>
        <SocialLinks/>
      </Box>
    </Flex>
  )
}

export default Footer
