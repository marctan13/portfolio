import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React, { useState } from "react";

function WorkExperience() {
  const jobs = [
    {
      title: "Software Developer Intern",
      company: "Bay Valley Tech",
      location: "Modesto, CA",
      date: "2023 - Present",
      responsibilities: [
        "Practiced React JS for personal and professional projects. Honing skills for front-end development.",
        "Collaborated with a team of other interns to create projects such as a business messaging and job board application.",
        "Acquired proficiency in utilizing Firebase for the backend infrastructure of the project",
        "Utilized Agile methodologies to ensure efficient project management and delivery.",
        "Utilized Git for version control and collaboration with other team members.",
        "Utilized Node Express for backend development.",
      ],
    },
    {
      title: "Human Resources Specialist",
      company: "Global Healthcare Services LLC",
      location: "Modesto, CA",
      date: "2021 - 2024",
      responsibilities: [
        "Orchestrated seamless onboarding process for new applicants by preparing application forms, supplies, and equipment.",
        "Diligently maintained and updated employee records and files, ensuring compliance with regulator requirements.",
        "Managed the renewal process for clinicians’ licenses, proactively reminding them of impending expirations to maintain regulatory compliance.",
        "Played a key role in procuring DME equipment for patients, demonstrating a commitment to enhancing patient care.",
        "Assist in encoding and verifying patient information for intake.",
        "Spearheaded basic IT Troubleshooting efforts and implements Excel-based inventory and file tracking system for efficient systems.",  
      ],
    },
    {
      title: "Sales Executive",
      company: "Jigsaw Marketing Corporation",
      location: "Dagupan, Philippines",
      date: "2016 - 2021",
      responsibilities: [
        "Cultivated and nurtured strong client relationships, resulting in increased sales and business growth.",
        "Directed work of efficient administrative team maintaining accurate sales, inventory, and order documentation.",
        "Maintained detailed records of sales progress and marketing success to better align goals with company priorities.",
        "Managed a team of employees to optimize efficiency in loading and transporting goods to clients, ensuring timely delivery and customer satisfaction",
      ],
    },
  ];
  const [activeJob, setActiveJob] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (job) => {
    setActiveJob(job);
    onOpen();
  };

  const theme = useTheme();
  const brand600 = theme.colors.brand[600];
  const brand500 = theme.colors.brand[500];

  return (
    <Box mt={8}>
      <Heading>Work Experience</Heading>
      <Box display="flex" justifyContent="center">
        <Flex direction={["column", "row"]} overflowY="auto">
          {jobs.map((job, index) => (
            <Box
              key={index}
              m={4}
              p={8}
              width={["100%", "auto"]}
              borderWidth={1}
              borderRadius="lg"
              overflow="hidden"
              onClick={() => handleOpenModal(job)}
              cursor="pointer"
              bg={brand600}
              _hover={{ bg: brand500 }}
            >
              <Text fontWeight="bold" fontSize="xl">
                {job.title}
              </Text>
              <Text>{job.date}</Text>

              <Modal
                isOpen={isOpen && activeJob?.title === job.title}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{job.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody overflowY="auto" maxHeight="80vh">
                    <Text>Company: {activeJob?.company}</Text>
                    <Text>Location: {activeJob?.location}</Text>
                    <Text>Date: {activeJob?.date}</Text>
                    <Text>Responsibilities:</Text>
                    <UnorderedList>
                      {activeJob?.responsibilities.map(
                        (responsibility, index) => (
                          <ListItem key={index}>{responsibility}</ListItem>
                        )
                      )}
                    </UnorderedList>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default WorkExperience;
