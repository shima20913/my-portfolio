import React from "react";
import { 
  Link, 
  Box, 
  Flex, 
  IconButton, 
  useDisclosure,  
  HStack,
  VStack,
  Collapse, 
} from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Qiita', path: '/blog' },
    { name: 'MyBlog', path: '/myblog' },
    { name: 'LogIn', path: '/login' }
  ];

    return (
        <Box bg="teal.500" color="white" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box>nuttei.com</Box>
        <IconButton size="md" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label="Open Menu" display={{ md: 'none' }} onClick={onToggle}/>

          
          <HStack as="nav" spacing={7} display={{ base: 'none', md: 'flex' }}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              as={RouterLink}
              to={item.path}
              _hover={{ textDecoration: 'none' }}
            >
              {item.name}
            </Link>
          ))}
        </HStack>
      </Flex>
            


          <Collapse in={isOpen} animateOpacity>
          <VStack as="nav" spacing={4} alignItems="start" bg="teal.500" p={4} display={{ md: 'none' }}>

          {menuItems.map((item, index) => (
            <MotionBox
              key={item.name}
              initial={{ opacity: 0, y: -20 }}   // アニメーションの初期状態
              animate={{ opacity: 1, y: 0 }}     // アニメーションの完了状態
              transition={{ delay: index * 0.1 }} // 各項目に遅延をつけて順番に表示
            >
              <Link 
                as={RouterLink} 
                to={item.path} 
                _hover={{ textDecoration: 'none' }} 
                onClick={onToggle}
              >
                {item.name}
              </Link>
          </MotionBox>
          ))}
        </VStack>
      </Collapse>
    </Box>
    );
};

export default Header;