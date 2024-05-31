import React from "react";
import { Box, Text, Link, Flex, Spacer, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useTheme } from "@emotion/react";

function ProjectCard() {
  const projects = [
    {
      title: "Login UI Page",
      description:
        "One of my initial projects at Bay Valley Tech involved designing a login UI for a hypothetical business. I utilized HTML, CSS, and flexbox properties to ensure the website's responsiveness.",
      img: "./src/assets/projects/login-ui.png",
      githubURL: "https://github.com/marctan13/login-ui-mtan",
    },
    {
      title: "Responsive Email Template",
      description:
        "In this project, I leveraged Bootstrap grids and components, along with HTML and CSS Flexbox, to create a responsive webpage. The layout adjusts according to the screen size.",
      img: "./src/assets/projects/email-template.png",
      githubURL: "https://github.com/marctan13/bootstrap-email-tan",
    },
    {
      title: "Higher Lower Game",
      description:
        "I developed a game using HTML, CSS, and JavaScript where players can guess a random number within a given range.",
      img: "./src/assets/projects/higher-lower.png",
      githubURL: "https://github.com/marctan13/higher-lower",
    },
    {
      title: "Dog Bites in New York",
      description:
        "I analyzed a dataset of dog bites in New York, cleaned it for analysis, identified the breeds most involved in dog bite cases, and visualized my findings.",
      img: "./src/assets/projects/dogbites.png",
      githubURL: "https://github.com/marctan13/dogbites",
    },
    {
      title: "Video Game Sales",
      description:
        "I analyzed a dataset of video game sales, comparing the performance of different genres and platforms.",
      img: "./src/assets/projects/vsgsales.png",
      githubURL: "https://github.com/marctan13/vgsalesratings",
    },
    {
      title: "Cat Cafe Sites",
      description:
        "I used CMS to create a website for a fictional cat cafe, utilizing both WordPress and Wix.",
      img: "./src/assets/projects/WIX-SITE.png",
      wixURL: "https://marctan13.wixsite.com/bvt-tan",
      wordpressURL: "https://dustycatcafe.wordpress.com/",
    },
    {
      title: "Number Guessing Game",
      description:
        "This game accommodates up to 6 players or a CPU. A random target number is generated, and the player whose input is closest to the target number scores.",
      img: "./src/assets/projects/number-guesser.png",
      githubURL:
        "https://github.com/marctan13/module-2-js-final-project-marc-tan",
      demoURL: "https://numbers-game-tan.netlify.app/",
    },
    {
      title: "Pokemon API",
      description:
        "I developed a website using React that fetches data from the Pokemon API and displays the information in various components.",
      img: "./src/assets/projects/pokemon-api-screenshot.png",
      githubURL: "https://github.com/marctan13/marc-tan-api-project",
      demoURL: "https://pokemon-api-marc-tan.netlify.app/",
    },
    {
      title: "Business Communication App",
      description:
        "Collaborated with a team of interns to create a business messaging application using React and Firebase. The app allows users to send messages and images.",
      img: "./src/assets/projects/yapper-chat.png",
      githubURL: "https://github.com/marctan13/yapper-chat",
      demoURL: "https://yapper-chat.netlify.app",
    },
    {
      title: "Shopper Ecommerce App",
      description:
        "Designed and developed an ecommerce application using React, Express, and mySQL. The app allows users to browse products, add them to a cart, and checkout.",
      img: "./src/assets/projects/shopper.png",
      githubURL: "https://github.com/marctan13/shopper",
      demoURL: "https://shopper-marc.netlify.app/",
    },
    {
      title: "Job Board App",
      description:
        "Collaborated with a team of interns to create a job board application using React, Express, and mySQL. The app allows users to post job listings and apply for jobs.",
      img: "./src/assets/projects/pokemon-api-screenshot.png", //No live image yet
      githubURL: "https://github.com/Bay-Valley-Tech-Code-Academy/yapper-jobs-front",
      demoURL: "https://yapper-chat.netlify.app", //No live demo yet
    },
  ];

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
