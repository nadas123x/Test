import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CkeckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import './Login.css';
import { useNavigate } from 'react-router-dom';

import { Navigate } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const navigate = useNavigate()

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate('/postul')        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="loginbody">
    <div className="col-md-12">
      <div className="card2">
      <img className="imglogin" src={require('../assets/img/ocpcopy.png')} />

<br></br>
<br></br>
<br></br><br></br>
<br></br>
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <div className="head">
           


              <h1> <strong></strong></h1>
              <br></br>

            </div>
            <label htmlFor="username"><h1 className="username"> <strong>Username: </strong> </h1></label>
            <Input
              type="text"
              className="form-control"
              name="  username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"><h1 className="username"> <strong>Password: </strong> </h1></label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <br></br>

          <div className="form-group">
            <button className="btn" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span> <strong>Login</strong></span>
              <br></br>

            </button>
            <br></br>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CkeckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
    </div>
  );
};

export default Login;
