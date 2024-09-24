import React, { useEffect } from 'react';
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

    
    };
    
    export default BlogList;

