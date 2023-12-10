import React, { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/users/login");
  };
  return (
    <div className={Styles.nav_flex}>
      <div className={Styles.menu_flex}>
        <Link to="/" className={Styles.linkStyle}>
          <h4 style={{ paddingLeft: "20px", marginRight: "20px" }}>
            Yoga Together
          </h4>
        </Link>
        <Link to="/" className={Styles.linkStyle}>
          <p style={{ marginRight: "20px" }}>Home</p>
        </Link>
        <Link to="/classes" className={Styles.linkStyle}>
          <p style={{ marginRight: "20px" }}>Classes</p>
        </Link>
        <Link to="/instructors" className={Styles.linkStyle}>
          <p style={{ marginRight: "20px" }}>Instructors</p>
        </Link>
        <Link to="/community" className={Styles.linkStyle}>
          <p style={{ marginRight: "20px" }}>Community</p>
        </Link>
        <Link to="/events" className={Styles.linkStyle}>
          <p>Events</p>{" "}
        </Link>
      </div>
      <div className={Styles.menu_flex}>
        <Link to="/myclass" className={Styles.linkStyle}>
          <p style={{ paddingRight: "20px" }}>My Classes</p>
        </Link>
        <Link to="/users/login" className={Styles.linkStyle}>
          <p style={{ paddingRight: "20px" }} onClick={handleLogOut}>
            Logout
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
