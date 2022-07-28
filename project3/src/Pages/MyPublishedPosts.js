/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import React, { useEffect, useState } from "react";
import { loadMyPublishedPosts, deletePost } from "../APIs/PostsApis";
import { Header } from "../Components/Dashboard/Header";
import { Post } from "../Components/Dashboard/Post";
import './style.css';

export default function MyPublishedPosts() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadMyPublishedPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch(
        () => {
          alert("An unexpected error occurred, please try loggin in again");
          navigate('/login');
        },
      );
  }, []);

  function removePost(pid) {
    deletePost()
      .then(() => {
        alert("Post deleted successfully");
        const updatedPosts = posts.filter((p) => (p.id !== pid));
        setPosts(updatedPosts);
      })
      .catch(
        (response) => {
          // eslint-disable-next-line prefer-template
          alert('An unexpected error occurred' + response);
        },
      );
  }

  return (
    <div className="main m-5">
      <Header title="MY PUBLISHED POSTS" user={posts[0]?.userName} />
      {
        // eslint-disable-next-line react/jsx-no-bind
        posts?.map((post) => <Post post={post} removePostFunction={removePost} />)
      }
    </div>
  );
}
