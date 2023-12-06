import React from 'react';
import Styles from './UserLogin.module.css'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    return (
    <div className={Styles.container}>
        <div className={Styles.form}>
            <h2>Sign In</h2>
            <form>        
                <input placeholder='Email Address' className={Styles.input}></input>
                <br/>
                <input placeholder='Password' className={Styles.input}></input>
                <br/>
                <button className={Styles.button}>Sign In</button>
            <button className={Styles.button}>Try out class </button>
            </form>
            <p className={Styles.text}>Don't have an account? <Link to='/users/new'>Sign Up</Link></p>
            <p>Or</p>
        </div>
        
        
    </div>
    )
}

export default UserLogin