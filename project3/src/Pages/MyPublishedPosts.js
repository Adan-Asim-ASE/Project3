import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import getCookie from './helper';
import Logout from "./Logout";
import axios from 'axios';
import './style.css';

export default function MyPublishedPosts() {
    const [posts, setPosts] = useState([]);
    const userToken = getCookie("userToken");

    const config = {
        headers: {
            authorization: 'Bearer ' + userToken,
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (userToken === 'none' || userToken === undefined) {
            alert("You need to login first")
            navigate('/');
        }

        fetch(process.env.REACT_APP_BACKEND_API + "posts/me/published", config)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(
                response => {
                    alert("An unexpected error occurred, please try loggin in again");
                    navigate('/Login');
                }
            );
    }, []);


    function removePost(pid) {
        axios.delete(process.env.REACT_APP_BACKEND_API + "posts/" + pid, config)
            .then(data => {
                alert("Post deleted successfully");
                const updatedPosts = posts.filter(p => (p.id !== pid));
                setPosts(updatedPosts);
            })
            .catch(
                response => {
                    alert("An unexpected error occurred" + response);
                }
            );
    }

    return (
        <div className="Main m-5">
            <div className="">
                <div className="text-white m-5 block-example border border-light bg-primary p-2 m-5">
                    <div className="text-end">
                        <p className="btn btn-outline-light rounded-pill p-2 mt-3 me-2 align-left"> {'User: ' + posts[0]?.userName + ' '} </p>
                    </div>
                    <h1 className="text-center mt-4 mb-4 ms-0"><strong> MY PUBLISHED POSTS </strong></h1>
                    <div className="text-center mb-4">
                        <Link to={'/Home'} className="btn btn-outline-light p-2 mt-3 ms-5 me-3 align-left"> Home </Link>
                        <Link to={'/Home/PublicPosts'} state={{ user: posts[0]?.userName }} className="btn btn-outline-light p-2 mt-3 me-3 align-left"> Public posts </Link>
                        <Link to={'/Home/Me/Published'} className="btn btn-outline-light p-2 mt-3 me-3 align-left"> My published posts </Link>
                        <Link to={'/Home/Me/Drafted'} className="btn btn-outline-light p-2 mt-3 me-3 align-left"> My drafted posts </Link>
                        <Logout userToken={userToken} />
                    </div>
                </div>

                {
                    posts?.map(post =>
                        <div to className="block-example border border-ligth p-4 m-5">
                            <p className="text-black-50 text-start ms-2">({post.published === true ? "Published" : "Drafted"})</p>
                            <h2 className="text-center text-primary mb-4">{post.title}</h2>
                            <p className="lead text-dark text-center">{post.content}</p>
                            <p className="text-dark text-end me-3">Made by user: {post.userName}</p>
                            <div className="text-center mt-2">
                                <Link to={'/Post/Edit/' + post.id} state={{ post: post, config: config }} className="btn btn-outline-primary btn-md me-3">Modify</Link>
                                <button onClick={() => removePost(post.id)} className="btn btn-outline-primary btn-md">Delete </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
}
