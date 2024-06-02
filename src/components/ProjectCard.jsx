import React from "react";
import { Box, Text, Link, Flex, Spacer, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useTheme } from "@emotion/react";
import { projects } from "../projects";

function ProjectCard() {

  const theme = useTheme();
    const brand500 = theme.colors.brand[500];
  return (
    <Flex direction="column" align="start" m={5}>
      {projects.map((project, index) => (
        <Box key={index} p={5} m={8} shadow="md" flex="1">
          <Image
            src={project.img}
            alt={project.title}
            mb={4}
            width="100%"
            height="500px"
            objectFit="contain"
          />{" "}
          <Text fontWeight="bold" fontSize="lg">
            {project.title}
          </Text>
          <Text mt={4}>{project.description}</Text>
          <Spacer />
          {project.githubURL ? (
            <Link href={project.githubURL} isExternal color={brand500} mt={2}>
              View on GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          ) : null}
          {project.demoURL ? (
            <Link href={project.demoURL} isExternal color={brand500} mt={2}>
              View Demo <ExternalLinkIcon mx="2px" />
            </Link>
          ) : null}
          {project.wixURL ? (
            <Link href={project.wixURL} isExternal color={brand500} mt={2}>
              View on Wix <ExternalLinkIcon mx="2px" />
            </Link>
          ) : null}
          {project.wordpressURL ? (
            <Link
              href={project.wordpressURL}
              isExternal
              color={brand500}
              mt={2}
            >
              View on Wordpress <ExternalLinkIcon mx="2px" />
            </Link>
          ) : null}
        </Box>
      ))}
    </Flex>
  );
}

export default ProjectCard;
