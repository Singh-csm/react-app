import React, { useState } from "react";
import Styles from "./UserLogin.module.css";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          window.alert(data.error);
        } else {
          localStorage.setItem("token", data.token);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.form}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={Styles.input}
          />
          <br />

          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={Styles.input}
          />
          <br />

          <button className={Styles.button}>Sign In</button>

          <button className={Styles.button}>Try out class </button>
        </form>
        <p className={Styles.text}>
          Don't have an account? <Link to="/users/new">Sign Up</Link>
        </p>
        <p>Or</p>
      </div>
    </div>
  );
};

export default UserLogin;
