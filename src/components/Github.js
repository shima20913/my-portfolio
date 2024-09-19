import React, { useEffect, useState } from 'react';
import { Box, Heading, List, ListItem, Link, Spinner, Text } from '@chakra-ui/react';

const Github = () => {
  const [repos, setRepos] = useState([]);  
  const [loading, setLoading] = useState(true);  

  // GitHub APIからデータを取得
  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/shima20913/repos');
      const data = await response.json();
      setRepos(data);  
      setLoading(false);  
    } catch (error) {
      console.error('リポジトリの取得に失敗しました:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);  

  if (loading) {
    return (
      <Box p={5} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>リポジトリを読み込み中...</Text>
      </Box>
    );
  }

  return (
    <Box p={5} maxW="container.md" mx="auto">
      <Heading as="h2" fontSize="xl" mb={5}>GitHub Projects</Heading>
      <List spacing={5}>
        {repos.map((repo) => (
          <ListItem key={repo.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="lg">
              <Link href={repo.html_url} color="teal.500" isExternal>
                {repo.name}
              </Link>
            </Heading>
            <Text mt={2}>{repo.description ? repo.description : 'No description available.'}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Github;
