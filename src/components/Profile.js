import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
const Profile = () => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Your Name</Heading>
            <Text mt={4}>プロフィール文を挿入。</Text>
        </Box>
    );
};

    export default Profile;
