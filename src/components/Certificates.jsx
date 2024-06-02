import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { certificates } from "../certificates";
function Certificates() {
  return (
    <Box width="100%" maxWidth="500px" margin="0 auto">
      <Heading mb={4}>Certificates</Heading>
      <Carousel autoPlay>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <Image
              src={certificate}
              alt={`Certificate ${index + 1}`}
              objectFit="contain"
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default Certificates;
