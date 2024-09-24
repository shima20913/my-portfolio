import React, { useState,useEffect } from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  ListItem, 
  List 
} from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(firestore, "blogs"));
      const blogData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

  return (
    <Box>
      <Heading as="h1" mb={4}>ブログ一覧</Heading>
      <List spacing={3}>
        {blogs.map((blog) => (
          <ListItem key={blog.id}>
            <Heading as="h2" size="md">{blog.title}</Heading>
            <Text>{blog.content}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );

    
    };
    
    export default BlogList;

