import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadToken } from "../../store/Thunks/TokenThunks";

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: localStorage.getItem("email") ? true : false,
  });
  const [loginRequired, setLoginRequired] = useState(false);

  const { email, password, rememberMe } = formData;
  const token = useSelector((state) => state.token.tokenTrue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginRequired(true);

    console.log(rememberMe)

    if (rememberMe) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }

    await dispatch(loadToken(email, password, navigate));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="email" value={email} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="rememberMe" checked={rememberMe} onChange={handleChange}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {(loginRequired && token === false) && (<p className="error-message">Email or password invalid</p>)}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}


