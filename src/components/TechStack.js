import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const TechStack = () => {
  const techs = ['React','Java', 'Go','javascript']

  return (
    <Box p={5} shadow="md" borderWidth="1px" mt={5}>
      <Heading fontSize="xl">学習中の技術</Heading>
      <List spacing={3} mt={4}>
        {techs.map((tech, index) => (
          <ListItem key={index}>{tech}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TechStack;
