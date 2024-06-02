import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { education } from "../education";

function Education() {

  return (
    <Box m={4}>
      <Heading>Education</Heading>
      <Flex direction={["column", "row"]} wrap="wrap">
        {education.map((ed, index) => (
          <Box key={index} m={4} p={4} width={["100%", "45%"]}>
            <Heading mb={4} size="md">
              {ed.school}
            </Heading>
            <Heading size="md">{ed.degree}</Heading>
            <Text>{ed.location}</Text>
            <Text>{ed.date}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Education;
