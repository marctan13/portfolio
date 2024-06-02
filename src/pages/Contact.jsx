import React from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";

function Contact() {
  const theme = useTheme();
  const brand700 = theme.colors.brand[700];
  return (
    //Using Chakra UI.Create a Form with the following fields: Email,Subject, Message, and a Submit button.
    <Box
      as="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg={brand700}
    >
      <Heading size="2xl">Looking forward to hearing from you!</Heading>
      <Flex
        as="form"
        direction="column"
        m={6}
        align="center"
        justify="center"
        width="50%"
        action="https://formspree.io/f/xdoqrgra"
        method="POST"
      >
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" focusBorderColor="black"/>
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>
            Message{" "}
            <Box as="span" color="red">
              *
            </Box>
          </FormLabel>
          <Textarea name="message" required focusBorderColor="black"/>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Flex>
    </Box>
  );
}

export default Contact;
