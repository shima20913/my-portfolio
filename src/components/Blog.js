import { 
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useToast,
 } from '@chakra-ui/react';
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
            return;
        }

        addBlogEntry({ title, content, date: new Date().toLocaleDateString});

        setTitle('');
        setContent('');

        toast({
            title: '投稿完了',
            description: '投稿されました',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        }


          return (
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <form onSubmit={submitHandle}>
                <FormControl id="title" isRequired mb={4}>
                  <FormLabel>タイトル</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="日記のタイトルを入力"
                  />
                </FormControl>
                <FormControl id="content" isRequired mb={4}>
                  <FormLabel>本文</FormLabel>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="日記の内容を入力"
                    rows={6}
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  投稿する
                </Button>
              </form>
            </Box>
          );
        };
        
        export default BlogForm;

    





