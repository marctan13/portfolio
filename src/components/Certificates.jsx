import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Certificates() {
  const certificates = [
      "./src/assets/certificates/Basic-CMS.png",
      "./src/assets/certificates/react-cert.png",
      "./src/assets/certificates/powerbi.png",
      "./src/assets/certificates/python.png",
      "./src/assets/certificates/sql-server.png",
      "./src/assets/certificates/data_analyst_google.png",
      "./src/assets/certificates/java.jpg",
  ];

  return (
    <Box width="100%" maxWidth="500px" margin="0 auto">
        <Heading mb={4}>Certificates</Heading>
      <Carousel>
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