import { Box, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function WorkExperience() {
  return (
    <Box mt={8}>
      <Heading>Work Experience</Heading>
      <Flex align="center" justify="flex-end">
      <Box>
        <Text>Software Developer Intern</Text>
        <Text>Bay Valley Tech - Modesto, CA August 2021 - March 2024</Text>
        <UnorderedList>
            <ListItem>Practiced React JS for personal and professional projects. Honing skills for front-end development.</ListItem>
            <ListItem>Collaborated with a team of other interns to create a business chat messaging app</ListItem>
            <ListItem>Acquired proficiency in utilizing Firebase for the backend infrastructure of the project</ListItem>
        </UnorderedList>
      </Box>
      </Flex>
    </Box>
  );
}

export default WorkExperience;
