import React from 'react';
import { Container } from '@chakra-ui/react';
import Profile from '../components/Profile';
import Github from '../components/Github';

const Home = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Profile />
      <Github />
    </Container>
  );
};

export default Home;