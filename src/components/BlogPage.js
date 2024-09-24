import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const BlogPage = () => {
   const [entries, setEntries] = useState([]);

   const addBlogEntry = (entry) => {
    setEntries([entry, ...entries]);
   };

   const deleteBlogEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id)); 
  };

   return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        投稿する
      </Heading>
      <BlogForm addBlogEntry={addBlogEntry} />
      <Heading as="h2" mt={10} mb={5}>
        投稿されたブログ
      </Heading>
      <BlogList entries={entries} deleteBlogEntry={deleteBlogEntry}/>
    </Box>
  );
};

export default BlogPage;


