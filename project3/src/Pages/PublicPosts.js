/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../Components/Dashboard/Header';
import { Post } from '../Components/Main/Post';
import { loadAllPublicPosts } from '../APIs/PostsApis';
import './style.css';

export default function PublicPosts() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const loc = useLocation();
  const { user } = loc.state;

  useEffect(() => {
    loadAllPublicPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch(
        () => {
          alert('An unexpected error occurred');
          navigate('/posts');
        },
      );
  }, []);

  return (
    <div className="main m-5">
      <Header title="PUBLIC POSTS" user={user} />
      {
        posts?.map((post) => <Post post={post} />)
      }
    </div>
  );
}
