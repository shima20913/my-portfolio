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
import BlogEdit from './components/BlogEdit';
import { Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null);  
      }
    });
  
    return () => unsubscribe();  
  }, []);

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
  }, [user, setIsAdmin]);

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
            <Route path="/myblog" element={<BlogList />} />
            <Route path="/admin/blog-editor" element={ user ? <BlogEdit /> : <Navigate to="/login" />
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

