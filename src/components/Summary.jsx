import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
  } from "@chakra-ui/react";

function Summary() {
  return (
    <Box mt={8} maxWidth="50%">
    <Heading size="3xl" mb={4}>
      About Me
    </Heading>
    <Text>
      Marc started journey in 2021, immersing himself in online courses
      from platforms like freecodecamp and Coursera during his spare time.
      His initial fascination with Data Analytics led him to pursue a
      course in Google Data Analytics on Coursera, where he acquired
      proficiency in tools such as Tableau and SQL, along with essential
      principles for data analysis. Delving deeper, he honed his skills in
      Python, utilizing tools like Jupyter Notebook to refine his Data
      Analytics capabilities.
    </Text>
    <br />
    <Text>
      Eventually, Marc seized the opportunity to delve into software
      development at Bay Valley Tech. Here, he immersed himself in the
      realm of full-stack development, mastering key technologies such as
      ReactJS and Node Express. Currently, he is engaged in an internship
      where he collaborates with fellow interns on various projects,
      applying Agile methodologies to ensure efficient project management
      and delivery. Marc is dedicated to continuous learning and growth,
      striving to leverage his skills and experiences to make meaningful
      contributions in the field of software development.
    </Text>
  </Box>
  )
}

export default Summary
