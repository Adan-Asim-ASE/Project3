/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-spacing */

import { Link } from 'react-router-dom';

export function LoginSignupButton({path}) {
  return (
    <div className="text-end">
      <Link to={path} className="btn btn-outline-light p-2 mt-3 me-4 align-left"> Login / Signup </Link>
    </div>
  );
}
