import React, { useEffect, useState } from "react";
// import { Link, Router, Routes, Navigate, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ClassList from "./components/ClassList";
import Community from "./components/Community";
import ClassDetail from "./components/ClassDetail";
import Data from "./components/data.jsx";
import MyClass from "./components/MyClass";
import CommunityForm from "./components/CommunityForm";
import Events from "./components/Events";
import ClassCreate from "./components/ClassCreate";
import CommunityUpdate from "./components/CommunityUpdate";
import UserLogin from "./components/UserLogin";
import UserCreate from "./components/UserCreate";
import Instructors from "./components/Instructors";

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem("token") !== null || false;

  if (!isLoggedIn) {
    return <Navigate to={"/users/login"} />;
  } else if (
    isLoggedIn &&
    ["/users/login", "/users/new"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }

  return children;
};

const Protected = () => {
  const isLoggedIn = localStorage.getItem("token") !== null || false;
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};

function App() {
  console.log(Protected());

  const [classes, setClasses] = useState(Data);

  return (
    <>
      <div className="App">
        {Protected() && <Navbar />}

        <Routes>
          {/* Instructor */}
          <Route path="/instructors" element={<Instructors />} />

          {/* Events */}
          <Route path="/events" element={<Events />} />

          {/* Community */}
          {/* Create */}
          <Route path="/community/new" element={<CommunityForm />} />

          {/* Update */}
          <Route path="/community/update/:id" element={<CommunityUpdate />} />

          {/* Show All */}
          <Route path="/community" element={<Community />} />

          {/* Create Class Page */}
          <Route path="/classes/admin/upload" element={<ClassCreate />} />

          {/* Class Page */}
          <Route
            path="/classes/:classId"
            element={<ClassDetail classes={classes} />}
          />

          <Route path="/classes" element={<ClassList classes={classes} />} />

          <Route path="/myclass" element={<MyClass />} />

          {/* Login and Reg */}
          <Route path="/users/login" element={<UserLogin />} />

          <Route path="/users/new" element={<UserCreate />} />

          {/* Main page */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />

          {/* Redirect to main */}
          {/* <Route path="/">
            <Navigate replace to="/home" />
          </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
