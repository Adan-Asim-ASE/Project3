import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import getCookie from './helper';
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";
import './style.css';

export default function PublicPosts() {
    const [posts, setPosts] = useState([]);

    const userToken = getCookie("userToken");
    const navigate = useNavigate();
    
    const loc = useLocation();
    let user = loc.state.user;
    

    useEffect(() => {
        if (userToken === 'none' || userToken === undefined) {
            alert("You need to login first")
            navigate('/');
        }

        fetch(process.env.REACT_APP_BACKEND_API + "posts/")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(
                response => {
                    alert("An unexpected error occurred");
                    navigate('/Home');
                }
            );
    }, []);



    return (
        <div className="Main m-5">
            <div className="">
                <div className="text-white m-5 block-example border border-light bg-primary p-2 m-5">
                    <div className="text-end">
                        <p className="btn btn-outline-light rounded-pill p-2 mt-3 me-2 align-left"> User: {user} </p>
                    </div>
                    <h1 className="text-center mt-4 mb-4 ms-3"><strong> ALL PUBLIC POSTS </strong></h1>
                    <div className="text-center mb-4">
                        <Link to={'/Home'} className="btn btn-outline-light p-2 mt-3 ms-5 me-3 align-left"> Home </Link>
                        <Link to={'/Home/PublicPosts'} state={{ user: user }} className="btn btn-outline-light p-2 mt-3 me-3 align-left"> Public posts </Link>
                        <Link to={'/Home/Me/Published'} className="btn btn-outline-light p-2 mt-3 me-3 align-left"> My published posts </Link>
                        <Link to={'/Home/Me/Drafted'} className="btn btn-outline-light p-2 mt-3 me-3 align-left"> My drafted posts </Link>
                        <Logout userToken={userToken} />
                    </div>
                </div>
                {
                    posts?.map(post =>
                        <div to className="block-example border border-ligth p-4 m-5">
                            <h2 className="text-center text-primary mb-4">{post.title}</h2>
                            <p className="lead text-dark text-center">{post.content}</p>
                            <p className="text-dark text-end me-3">Made by user: {post.userName}</p>
                        </div>)
                }
            </div>
        </div>
    );
}
