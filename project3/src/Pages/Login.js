/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import { userLogin } from '../APIs/UserApis';
import { Heading } from '../Components/LoginSignup/Heading';
import { InputField } from '../Components/LoginSignup/InputField';
import { SubmitButton } from '../Components/LoginSignup/SubmitButton';
import './style.css';

export default function Login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const navigate = useNavigate();

  function validate() {
    let valid = false;
    if (email.length && password.length) {
      valid = true;
    }
    return valid;
  }

  async function submit(event) {
    event.preventDefault();

    let userToken = null;
    if (email.length && password.length) {
      const data = {
        email,
        password,
      };

      await userLogin(data)
        // eslint-disable-next-line no-shadow
        .then((data) => {
          userToken = data.accessToken;
          // eslint-disable-next-line prefer-template
          document.cookie = 'userToken=' + userToken + '; path=/';
        })
        .catch(() => {
          alert('Login Failed');
        });
    }

    if (userToken != null) {
      alert('Login Successful');
      navigate('/posts/me');
    }
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="Center">
      <Form onSubmit={submit} className="block-example border border-ligth p-4">
        <Heading heading="Login" />

        <InputField
          focus
          label="Email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChangeFunction={setEmail}
        />
        <InputField
          focus={false}
          label="Password"
          type="password"
          placeholder="******"
          value={password}
          onChangeFunction={setPassword}
        />

        <div className="text-center mt-4">No account? Click here to
          <NavLink to={{ pathname: '/signup' }}>
            <span className="text-primary NavLink"> SignUp</span>
          </NavLink>
        </div>

        <SubmitButton title="Login" validationFunction={validate} />
      </Form>
    </div>
  );
}
