import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const brand700 = theme.colors.brand[700];
  const brand500 = theme.colors.brand[500];

  return (
    <Flex
      direction="column"
      justify="space-between"
      height="82vh"
      bg={brand700}
      p={4}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        width="100%"
        maxW="1200px"
        mt={12}
      >
        {/* Summary */}
        <Box
          mt={10}
          maxW={{ base: "90%", md: "50%" }}
          p={4}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading size="4xl" mb={4}>
            Full-Stack Developer
          </Heading>
          <Text>
            Marc Tan is an aspiring Software Developer based in California,
            dedicated to laying the groundwork for a fulfilling career in
            Software Development. With a strong focus on front-end frameworks
            like ReactJS, Marc demonstrates a fervent dedication to learning and
            innovation.
          </Text>
          <Stack mt={4} spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              color={brand500}
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Let's Work Together
            </Button>
          </Stack>
        </Box>
        <Box
          mt={{ base: 10, md: 0 }}
          ml={{ base: 0, md: 10 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/solo-pic.jpg"
            alt="Marc Tan"
            borderRadius="full"
            boxSize={{ base: "150px", md: "300px" }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
