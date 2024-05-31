import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Marketing Management",
      school: "De La Salle University - Manila",
      location: "Manila, Philippines",
      date: "2010 - 2014",
    },
    {
      degree: "",
      school: "Bay Valley Tech",
      location: "Modesto, CA",
      date: "2023 - 2024",
    },
  ];
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
