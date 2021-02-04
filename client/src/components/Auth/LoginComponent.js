import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login, getTokens } from '../../services/authService';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const LoginComponent = (props) => {

    const history = useHistory();
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
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
          login(email, password).then(
            () => {
              history.push("/");
            },
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
          getTokens(email, password);
        } else {
          setLoading(false);
        }
      };


      return (
        <div className="">
          <div className="">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="images"

            />
    
            <Form onSubmit={handleLogin} ref={form}>
              <div className="">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required]}
                />
              </div>
    
              <div className="">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className=""
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
    
              <div className="">
                <button className="" disabled={loading}>
                  {loading && (
                      <span>Loading..</span>
                  )}
                  <span>Login</span>
                </button>
              </div>
    
              {message && (
                <div className="">
                  <div className="" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      );

};

export default LoginComponent;