import React from 'react';
import { useState } from 'react';
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
import Login from './pages/Login'; 

function App() {
  const [user, setUser] = useState(null);

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
            <Route path="/myblog" element={<BlogPage />} /> 
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
    </ChakraProvider>
  );
}

export default App;

