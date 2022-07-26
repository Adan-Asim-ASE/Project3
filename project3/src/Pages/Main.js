/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import { loadAllPublicPosts } from '../APIs/PostsApis';
import { Post } from '../Components/Main/Post';
import { Header } from '../Components/Main/Header';
import './style.css';

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadAllPublicPosts()
      .then(data => {
        setPosts(data);
      })
      .catch(() => {
        alert('Unable to load data, please try again');
      });
  }, []);

  return (
    <div className="main m-5">
      <Header />
      {
        posts?.map(post => <Post post={post} />)
      }
    </div>
  );
}
