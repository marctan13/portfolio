import { Flex, Divider, Box } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Certificates from "../components/Certificates";

function AboutMe() {
  const theme = useTheme();
  const brand700 = theme.colors.brand[700];
  return (
    <Flex direction="column" bg={brand700} minHeight="100vh">
      <Flex align="center" justify="center" width="100%" py={5}>
        <Summary />
        <Box mx={5} height="auto">
          <Divider orientation="vertical" borderWidth="2px" />
        </Box>
        <Skills />
      </Flex>
      <Flex align="center" justify="center" width="100%" py={5}>
        <WorkExperience />
      </Flex>
      <Divider />
      <Flex align="center" justify="center" width="100%" py={5}>
        <Education />
        <Certificates />
      </Flex>
      <Flex align="center" justify="center" width="100%" py={5}></Flex>
    </Flex>
  );
}

export default AboutMe;
