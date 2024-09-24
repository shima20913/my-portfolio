import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { auth } from '../firebase';
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
      {user ? (
      <BlogForm addBlogEntry={addBlogEntry} />
      ) : (
        <p>投稿や編集を行うにはログインしてください。</p>
      )}
      <Heading as="h2" mt={10} mb={5}>
      <p>投稿されたブログ</p>
      </Heading>
      <BlogList entries={entries} />
    </Box>
  );
};

export default BlogPage;


