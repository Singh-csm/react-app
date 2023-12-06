import React, { useState } from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ClassList from './components/ClassList'
import Community from './components/Community';
import ClassDetail from './components/ClassDetail';
import Data from './components/data.jsx'
import MyClass from './components/MyClass';
import CommunityForm from './components/CommunityForm';
import Events from './components/Events';
import ClassCreate from './components/ClassCreate';
import CommunityUpdate from './components/CommunityUpdate';
import UserLogin from './components/UserLogin';
import UserCreate from './components/UserCreate';
import Instructors from './components/Instructors';

function App() {

  const [classes, setClasses] = useState(Data)

  return (
    <div className="App">
      <Navbar/>

      <Switch>

        {/* Instructor */}
        <Route path='/instructors'>
          <Instructors />
        </Route>

        {/* Events */}
        <Route path='/events'>
          <Events />
        </Route>
        
        {/* Community */}
          {/* Create */}
        <Route path='/community/new'> 
          <CommunityForm />
        </Route> 
         {/* Update */}
        <Route path='/community/update/:id'>
          <CommunityUpdate />
        </Route>
          {/* Show All */}
        <Route path='/community'>
          <Community />
        </Route>


        {/* Create Class Page */}
        <Route path='/classes/admin/upload'>
          <ClassCreate />
        </Route>

        {/* Class Page */}
        <Route path="/classes/:classId">
          <ClassDetail classes={classes}/>
        </Route>

        <Route path='/classes'>
          <ClassList classes={classes}/>
        </Route>

        <Route path='/myclass'>
          <MyClass />
        </Route>

        {/* Login and Reg */}
        <Route path='/users/login'>
          <UserLogin />
        </Route>
        <Route path='/users/new'>
          <UserCreate />
        </Route>

        {/* Main page */}
        <Route path="/home">
          <Main/>
        </Route>

        {/* Redirect to main */}
        <Route path='/'>
          <Redirect to='/home'></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
