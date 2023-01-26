import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import "./style.scss";

const LoginScreen = ({ setAuthState }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setPasswordError(false);
    setLoginError(false);
    if (name.length > 0 && password.length > 0) {
      if (name === "admin" && password === "admin") {
        setAuthState({ authenticated: true });
        navigate("/");
      } else {
        setLoginError(true);
      }
    } else {
      if (name.length === 0) {
        setNameError(true);
      }
      if (password.length === 0) {
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={`input ${nameError ? "error" : ""}`}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {nameError && <p>Поле не может быть пустым</p>}
        <input
          type="password"
          placeholder="Password"
          className={`input ${passwordError ? "error" : ""}`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p>Поле не может быть пустым</p>}
        {loginError && (
          <p style={{ color: "red" }}>Имя или пароль неправильны</p>
        )}
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
