import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Certificates() {
  const certificates = [
      "/certificates/Basic-CMS.png",
      "/certificates/react-cert.png",
      "/certificates/powerbi.png",
      "/certificates/python.png",
      "/certificates/sql-server.png",
      "/certificates/data_analyst_google.png",
      "/certificates/java.jpg",
  ];

  return (
    <Box width="100%" maxWidth="500px" margin="0 auto">
        <Heading mb={4}>Certificates</Heading>
      <Carousel autoPlay>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <Image src={certificate} alt={`Certificate ${index + 1}`} objectFit="contain" />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default Certificates;