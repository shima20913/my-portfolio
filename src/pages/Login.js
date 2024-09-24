import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { 
  Container, 
  Box, 
  VStack, 
  Heading, 
  FormControl, 
  FormLabel, 
  Text,
  Button,
} from '@chakra-ui/react';


const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          setUser(userCredential.user);  
        } catch (error) {
          setError('ログインに失敗しました');
        }
    };

    return (
      <Container maxW="sm" centerContent>
        <Box
        p={6}
        mt={12}
        w="100%"
        maxW="md"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        
         <VStack spacing={5} align="stretch">
         <Heading as="h2" size="lg" textAlign="center" color="teal.500">
          ログイン
          </Heading>
          <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <input type="email" placeholder="メールアドレスを入力" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>

              <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <input type="password" placeholder="パスワードを入力" value={password} onChange={(e) => setPassword(e.target.value)} focusBorderColor="teal.400"/>
              </FormControl>
            <Button  variant="solid" type="submit" colorScheme="blue" size="md"  mt={6} w="full" _hover={{ bg: "teal.600" } }>ログイン</Button>
            </form>

            {error && <Text color="red.500" textAlign="center">{error}</Text>}
            </VStack>
            </Box>
            </Container>
      );
    };
    
    export default Login;

