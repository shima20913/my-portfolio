import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, List, ListItem, Link, Spinner } from '@chakra-ui/react';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Qiitaから記事を取得
  const fetchQiitaArticles = async () => {
    try {
      const response = await fetch('https://qiita.com/api/v2/users/shima20913/items');
      const data = await response.json();
      setArticles(data); 
      setLoading(false);  
    } catch (error) {
      console.error('記事の取得に失敗しました:', error);
      setLoading(false);
    }
  };

  // 初回レンダリング時にQiitaの記事をフェッチ
  useEffect(() => {
    fetchQiitaArticles();
  }, []);

  if (loading) {
    return (
      <Box p={5} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>読み込み中...</Text>
      </Box>
    );
  }

  return (
    <Box p={5} maxW="container.md" mx="auto">
      <Heading as="h1" mb={5}>ブログ記事一覧</Heading>

      <List spacing={5}>
        {articles.map((article) => (
          <ListItem key={article.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">
              <Link href={article.url} color="teal.500" isExternal>
                {article.title}
              </Link>
            </Heading>
            <Text mt={2}>{article.created_at.slice(0, 10)}</Text> 
            <Text mt={2}>{article.body.slice(0, 100)}...</Text> 
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Blog;
