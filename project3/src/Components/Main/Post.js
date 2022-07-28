/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-spacing */

export function Post({ post }) {
  return (
    <div to className="block-example border border-ligth p-4 m-5">
      <h2 className="text-center text-primary mb-4">{post.title}</h2>
      <p className="lead text-dark text-center">{post.content}</p>
      <p className="text-dark text-end me-3">Made by user: {post.userName}</p>
    </div>
  );
}
