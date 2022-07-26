/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-spacing */

import { LoginSignupButton } from './LoginButton';
import { Title } from './Title';

export function Header() {
  return (
    <div className="text-white m-5 block-example border border-light bg-primary p-2 m-5">
      <div className="text-end">
        <LoginSignupButton path="/login" />
      </div>
      <Title title="ALL PUBLIC POSTS" />
    </div>
  );
}
