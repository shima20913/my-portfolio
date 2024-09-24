import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const BlogPage = () => {
   const [entries, setEntries] = useState([]);
   const [user, setUser] = useState(null);

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); 
    });
    return () => unsubscribe();
  }, []);

  const addBlogEntry = (entry) => {
    setEntries([entry, ...entries]);
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


