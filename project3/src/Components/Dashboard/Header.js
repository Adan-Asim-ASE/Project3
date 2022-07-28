/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { LinkButton } from './LinkButton';
import Logout from './Logout';

export function Header({ title, user }) {
  return (
    <div className="text-white m-5 block-example border border-light bg-primary p-2 m-5">
      <div className="text-end">
        <p className="btn btn-outline-light rounded-pill p-2 mt-3 me-2 align-left"> {'User: ' + user + ' '} </p>
      </div>
      <h1 className="text-center mt-4 mb-4 ms-0"><strong> { title } </strong></h1>
      <div className="text-center mb-4">
        <LinkButton path="/posts/me" className="ms-5" title="Home" />
        <LinkButton path="/posts/public" title="Public posts" stateValue={{ user: user }} />
        <LinkButton path="/posts/me/published" title="My published posts" />
        <LinkButton path="/posts/me/drafted" title="My drafted posts " />
        <Logout />
      </div>
    </div>
  );
}
