import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import DiaryForm from './DiaryForm';
import DiaryList from './DiaryList';

const BlogPage = () => {
   const [entries, setEntries] = useState([]);

   const addBlogEntry = (entry) => {
    setEntries([entry, ...entries]);
   };

   return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        投稿する
      </Heading>
      <DiaryForm addDiaryEntry={addBlogEntry} />
      <Heading as="h2" mt={10} mb={5}>
        投稿されたブログ
      </Heading>
      <DiaryList entries={entries} />
    </Box>
  );
};

export default BlogPage;


