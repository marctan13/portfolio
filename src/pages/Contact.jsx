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

function Contact() {
  return (
    //Using Chakra UI.Create a Form with the following fields: Email,Subject, Message, and a Submit button.
    <Box as="div">
      <Heading size="2xl">Looking forward to hearing from you!</Heading>
      <Flex as="form" direction="column" m={6} align="center" justify="center" width="50%" action="https://formspree.io/f/xdoqrgra" method="POST">
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message <Box as="span" color="red">*</Box></FormLabel>
          <Textarea name="message" required/>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Flex>
    </Box>
  );
}

export default Contact;
