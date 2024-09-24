import React from 'react';
import { Box, Heading, Text, ListItem } from '@chakra-ui/react';

const BlogList = ({ entries }) => {
    return (
        <Box p={5} maxW="container.md" mx="auto">
          {entries.length === 0 ? (
            <Text>まだブログは投稿されていません。</Text>
          ) : (
            entries.map((entry) => (
              <ListItem key={entry.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
                <Heading fontSize="xl">{entry.title}</Heading>
                <Text mt={2}>{entry.content}</Text>
                <Text mt={2} fontSize="sm" color="gray.500">
                  {entry.date}
                </Text>
                <Text mt={4}>{entry.content}</Text>
                
              </ListItem>
            ))
          )}
        </Box>
      );
    };
    
    export default BlogList;

