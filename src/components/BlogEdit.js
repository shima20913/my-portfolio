import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase';
import {
    Box,
    Heading,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react';


const BlogEdit = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(firestore, "blogs"), {
                title,
                content,
                createdAt: new Date()
            });

            setTitle('');
            setContent('');
            alert("投稿完了");
        } catch (error) {
            console.error("投稿に失敗", error);
        }
    };

    return (
        <Box>
        <Heading as="h1" mb={4}>投稿・編集</Heading>
        <form onSubmit={submitHandle}>
          <Input
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={3}
          />
          <Textarea
            placeholder="コンテンツ"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            mb={3}
          />
          <Button type="submit" colorScheme="teal">投稿</Button>
        </form>
      </Box>
    );
};

export default BlogEdit





