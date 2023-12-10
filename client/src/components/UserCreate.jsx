import React, { useRef, useState } from "react";
import Styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const confirmPassword = useRef();

  const handleOnChnage = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword.current.value) {
      window.alert("password and confirm password are not same");
    } else {
      fetch("http://localhost:4000/api/user/createUser", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            window.alert(data.error);
          } else {
            localStorage.setItem("token", data.token);
            console.log(data);
            navigate("/home");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.form}>
        <h2>Create Account</h2>
        <form onSubmit={HandleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleOnChnage}
            className={Styles.input}
          ></input>
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleOnChnage}
            className={Styles.input}
          ></input>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={handleOnChnage}
            className={Styles.input}
          ></input>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChnage}
            className={Styles.input}
          ></input>
          <br />
          <input
            type="password"
            ref={confirmPassword}
            placeholder="Confirm Password"
            className={Styles.input}
          ></input>
          <br />
          <button type="submit" className={Styles.button}>
            Create Account
          </button>
        </form>
        <p className={Styles.text}>
          Already have an account? <Link to="/users/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default UserCreate;
