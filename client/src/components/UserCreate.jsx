import React from 'react'
import Styles from './UserLogin.module.css'
import { Link } from 'react-router-dom'

const UserCreate = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.form}>
                <h2>Create Account</h2>
                <form>  
                    <input type='text' placeholder='First Name' className={Styles.input}></input>
                    <br/>
                    <input type='text' placeholder='Last Name' className={Styles.input}></input>
                    <br/>      
                    <input type='text' placeholder='Email Address' className={Styles.input}></input>
                    <br/>
                    <input type='password' placeholder='Password' className={Styles.input}></input>
                    <br/>
                    <input type='password' placeholder='Confirm Password' className={Styles.input}></input>
                    <br/>
                    <button className={Styles.button}>Create Account</button>
                </form>
                <p className={Styles.text}>Already have an account? <Link to='/users/login'>Sign In</Link></p>
            </div> 
        </div>
    )
}

export default UserCreate