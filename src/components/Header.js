import React from "react";
import { 
  Link, 
  Box, 
  Flex, 
  Stack, 
  IconButton, 
  useDisclosure,  
  HStack,
  VStack,
  Collapse, 
} from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Header = () => {
  const { isOpen, onToggle } = useDisclosure

    return (
        <Box bg="teal.500" color="white" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box>nuttei.com</Box>
        <IconButton size="md" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label="Open Menu" display={{ md: 'none' }} onClick={onToggle}/>

          
          <HStack as="nav" spacing={7} display={{ base: 'none', md: 'flex' }}>
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
            MyBlog
            </Link>
            <Link as={RouterLink} to="/login" _hover={{ textDecoration: 'none' }}>
            LogIn
            </Link>
            </HStack>
           </Flex>


           <Collapse in={isOpen} animateOpacity>
        <VStack as="nav" spacing={4} display={{ md: 'none' }} mt={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }} onClick={onToggle}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none' }} onClick={onToggle}>
            About
          </Link>
          <Link as={RouterLink} to="/blog" _hover={{ textDecoration: 'none' }} onClick={onToggle}>
            Qiita
          </Link>
          <Link as={RouterLink} to="/myblog" _hover={{ textDecoration: 'none' }} onClick={onToggle}>
            MyBlog
          </Link>
          <Link as={RouterLink} to="/login" _hover={{ textDecoration: 'none' }} onClick={onToggle}>
            LogIn
          </Link>
        </VStack>
      </Collapse>
    </Box>
    );
};

export default Header;