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
import { jobs } from "../jobs";

function WorkExperience() {

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
                  <ModalHeader bg={brand600}>{job.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody overflowY="auto" maxHeight="80vh" bg={brand600}>
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
                  <ModalFooter bg={brand600}>
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
