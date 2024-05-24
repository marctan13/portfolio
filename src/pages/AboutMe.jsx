import { Flex, Divider } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import WorkExperience from "../components/WorkExperience";

function AboutMe() {
  const theme = useTheme();
  const brand700 = theme.colors.brand[700];
  return (
    <Flex direction="column" bg={brand700} height="100vh">
      <Flex align="center" justify="center">
        <Summary />
        <Divider orientation="vertical" />
        <Skills />
      </Flex>
      <Flex align="center" justify="center">
        <WorkExperience/>
      </Flex>
    </Flex>
  );
}

export default AboutMe;
