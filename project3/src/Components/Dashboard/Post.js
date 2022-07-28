/* eslint-disable react/button-has-type */
/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { Link } from 'react-router-dom';

export function Post({ post, removePostFunction }) {
  return (
    <div to className="block-example border border-ligth p-4 m-5">
      <p className="text-black-50 text-start ms-2">({post.published === true ? 'Published' : 'Drafted'})</p>
      <h2 className="text-center text-primary mb-4">{post.title}</h2>
      <p className="lead text-dark text-center">{post.content}</p>
      <p className="text-dark text-end me-3">Made by user: {post.userName}</p>
      <div className="text-center mt-2">
        <Link to={'/post/' + post.id + '/edit'} state={{ post: post }} className="btn btn-outline-primary btn-md me-3">Modify</Link>
        <button onClick={() => removePostFunction(post.id)} className="btn btn-outline-primary btn-md">Delete </button>
      </div>
    </div>
  );
}
