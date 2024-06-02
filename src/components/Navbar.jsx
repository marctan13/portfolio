import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Link as ChakraLink,
  Image,
  Text,
  useTheme,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLargerThanMobile] = useMediaQuery("(min-width: 756px)"); // Width when the hamburger menu appears
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (!isLargerThanMobile) {
      setIsOpen(false);
    }
  };

  const brand900 = theme.colors.brand[900];
  const brand500 = theme.colors.brand[500];

  return (
    <Box
      bg={brand900}
      color={brand500}
      p="4"
      height="74px" // BG color, Text color, Padding, Navbar Height
      width="100%"
      overflowX="hidden"
      position="relative"
    >
      <Flex justify="space-between" align="center" position="relative">
        <Image
          src="./src/assets/logo.png"
          alt="Yapper Jobs Logo"
          height="35px"
          onClick={() => navigate("/")}
          cursor="pointer"
        />
        <Text ml={4}>Marc Tan</Text>
        {isLargerThanMobile ? (
          <Flex flex="2" justify="flex-end">
            {/* For Seekers */}
            <Flex mr="4">
              <ChakraLink
                as={Link}
                to="/about-me" // Chakra Link
                mr="4"
              >
                About Me
              </ChakraLink>
              <ChakraLink as={Link} to="/projects" mr="4">
                Projects
              </ChakraLink>
              <ChakraLink as={Link} to="/contact">
                Contact
              </ChakraLink>
              <Button
                as={ChakraLink}
                href={"./src/assets/MarcTanResume.pdf"}
                colorScheme="teal"
                download
              >
                Download Resume
              </Button>
            </Flex>
          </Flex>
        ) : (
          <IconButton
            aria-label="Open Menu"
            size="sm"
            icon={<HamburgerIcon />}
            onClick={handleToggle}
            mr="2"
          />
        )}
        <Drawer
          placement="right"
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent bg="#A96CDE">
            {" "}
            {/* Drawer BG Color */}
            <DrawerCloseButton />
            <DrawerBody>
              <ChakraLink
                as={Link}
                to="/about-me"
                onClick={() => {
                  setIsOpen(false);
                  handleLinkClick();
                }}
                pb="2"
                display="block"
                my="4"
                fontSize="xl"
                borderBottom="1px solid #EDF6F9" // Color of border in hamburger menu
                color="#EDF6F9" // Color of text in hamburger menu
                _hover={{
                  // On hover change to these settings
                  textDecoration: "none",
                  color: "#0E1428",
                  borderBottom: "1px solid #0E1428",
                }}
              >
                About Me
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/projects"
                onClick={() => {
                  setIsOpen(false);
                  handleLinkClick();
                }}
                pb="2"
                display="block"
                my="4"
                fontSize="xl"
                borderBottom="1px solid #EDF6F9"
                color="#EDF6F9"
                _hover={{
                  textDecoration: "none",
                  color: "#0E1428",
                  borderBottom: "1px solid #0E1428",
                }}
              >
                Projects
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  handleLinkClick();
                }}
                pb="2"
                display="block"
                my="4"
                fontSize="xl"
                borderBottom="1px solid #EDF6F9"
                color="#EDF6F9"
                _hover={{
                  textDecoration: "none",
                  color: "#0E1428",
                  borderBottom: "1px solid #0E1428",
                }}
              >
                Contact
              </ChakraLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}

export default NavBar;
