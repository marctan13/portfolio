import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';

function SocialLinks() {
  return (
    <Flex justify="center">
      <Link href="https://www.linkedin.com/in/your-profile" isExternal>
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          variant="ghost"
          size="lg"
          color="brand.500"
          _hover={{ color: 'brand.700' }}
        />
      </Link>
      <Link href="https://github.com/your-username" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          variant="ghost"
          size="lg"
          color="brand.500"
          _hover={{ color: 'brand.700' }}
        />
      </Link>
    </Flex>
  );
}

export default SocialLinks;
