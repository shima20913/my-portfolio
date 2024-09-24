import React, { useState } from 'react';

const BlogPage = () => {
   const [entries, setEntries] = useState([]);

   const addBlogEntry = (entry) => {
    setEntries([entry, ...entries]);
   };
}