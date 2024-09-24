import React from 'react';
import { useState, useEffect} from 'react';
import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Github from './components/Github';
import BlogList from './components/BlogList';  
import Login from './pages/Login'; 
import ProtectRoute from './components/ProtectRoute';
import BlogEdit from './components/BlogEdit';

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchUserRole = async () => {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists() && userDoc.data().isAdmin) {
          setIsAdmin(true); 
        }
      };
      fetchUserRole();
    }
  }, [user]);

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
            <Route path="/blog" element={<BlogList />} />
            <Route path="/admin/blog-editor" element={<ProtectRoute user={user} isAdmin={isAdmin}><BlogEdit /></ProtectRoute>
                }
              />
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

