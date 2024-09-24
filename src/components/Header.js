import React from "react";
import { Link, Box, Flex, Stack } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box bg="teal.500" color="white" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box>nuttei.com</Box>
                <Flex alignItems="center">
                <Stack direction="row" spacing={7}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none' }}>
              About
            </Link>
            <Link as={RouterLink} to="/blog" _hover={{ textDecoration: 'none' }}>
              Qiita
            </Link>
            <Link as={RouterLink} to="/myblog" _hover={{ textDecoration: 'none' }}>
            myBlog
            </Link>
        </Stack>
        </Flex>
        </Flex>
        </Box>

    );
};

export default Header;