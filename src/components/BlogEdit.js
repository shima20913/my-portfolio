import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../firebase';


const BlogEdit = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(firebase, "blogs"), {
                title,
                content,
                createdAt: new Date()
            });

            setTitle('');
            setContent('');
            alert("投稿完了");
        } catch (error) {
            console.error("投稿に失敗", error);
        }
    }

}





