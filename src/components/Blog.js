import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const BlogForm = ({addBlogEntry}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const toast = useToast();

    const submitHandle = (e) => {
        e.preventDefault();
        if(!title || !content) {
            toast({
                title: 'エラー',
                description: 'タイトルと本文を入力',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            
        }
    }





}