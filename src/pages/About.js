import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import TechStack from '../components/TechStack'; 

const About = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">自己紹介</Heading>
        <Text mt={4}>
          現在公務員として働いており、業務の傍らで趣味の開発に勤しんでおります。職場でもプログラミングを用いた業務を行うことがあるので、自己学習頑張ります！
        </Text>
      </Box>

      <TechStack />
    </Container>
  );
};

export default About;

