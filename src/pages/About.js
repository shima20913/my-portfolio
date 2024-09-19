import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import TechStack from '../components/TechStack'; 

const About = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">About Me</Heading>
        <Text mt={4}>
          自己紹介を記載
        </Text>
      </Box>

      <TechStack />
    </Container>
  );
};

export default About;

