import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Github from './components/Github';
import BlogPage from './components/BlogPage';  

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Box>
        <Header />
        <Box as="main" p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/github" element={<Github />} />
            <Route path="/my blog/:id" element={<BlogPage />} /> 
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
    </ChakraProvider>
  );
}

export default App;

