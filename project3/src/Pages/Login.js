import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';
import './style.css';


export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

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
        email: email,
        password: password
      };

      await axios.post(process.env.REACT_APP_BACKEND_API + "users/login", data)
        .then(data => {
          userToken = data.data.accessToken;
          document.cookie = 'userToken=' + userToken + '; path=/'
        })
        .catch(
          response => {
            alert("Login Failed");
          }
        );
    }

    if (userToken != null) {
      alert("Login Successful");
      navigate('/posts/me');
    }
  }

  return (
    <div className="Center">
      <Form onSubmit={submit} className="block-example border border-ligth p-4">
        <h2 className="mb-4 mt-2 text-primary text-center"><strong>LOGIN</strong></h2>
        <hr />
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="left-margin mb-3 mt-2"><strong>Email</strong></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="mb-3 mt-3"><strong>Password</strong></Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="text-center mt-4">No account? Click here to
          <NavLink to={{ pathname: "/signup" }}>
            <span className="text-primary NavLink"> SignUp</span>
          </NavLink>
        </div>
        <Button className="mt-4 mb-3" block size="md" type="submit" disabled={!validate()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
