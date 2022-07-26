/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable quotes */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { Heading } from '../Components/LoginSignup/Heading';
import { InputField } from "../Components/LoginSignup/InputField";
import { SubmitButton } from "../Components/LoginSignup/SubmitButton";
import { createUser } from '../APIs/UserApis';
import './style.css';

export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validate() {
    if (email.length && password.length && name.length) {
      return true;
    }
    return false;
  }

  async function submit(event) {
    event.preventDefault();

    if (!email.length && !password.length && !name.length) {
      alert("Fill all fields");
    }

    const user = {
      name,
      email,
      password,
    };

    let userToken = null;

    createUser(user)
      .then((data) => {
        userToken = data.data.accessToken;
        document.cookie = 'userToken=' + userToken + '; path=/';
      })
      .catch(
        () => {
          alert("User Signup failed");
        },
      );

    if (userToken != null) {
      alert("Signup Successfull");
      navigate('/posts/me');
    }
  }

  return (
    <div className="Center Container">
      <Form onSubmit={submit} className="block-example border border-ligth p-4">
        <Heading heading="SignUp" />

        <InputField
          focus
          label="Name"
          type="text"
          placeholder="xyz abc"
          value={name}
          onChangeFunction={setName}
        />
        <InputField
          focus={false}
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

        <div className="text-center mt-4">
          Have account? Click here to
          <NavLink to="/login" activeClassName="selected">
            <span className="text-primary NavLink"> Login</span>
          </NavLink>
        </div>

        <SubmitButton title="Sign Up" validationFunction={validate} />
      </Form>
    </div>
  );
}
