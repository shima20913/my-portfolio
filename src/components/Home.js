import React from 'react';
import { Container } from '@chakra-ui/react';
import Profile from './Profile';
import BlogHighlights from '../components/BlogHighlights';
import GithubHighlights from '../components/GithubHighlights';

const Home = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Profile />
      <BlogHighlights />
      <GithubHighlights />
    </Container>
  );
};

export default Home;