import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Main.module.css'
import teacherImg from '../images/main_teacher2.jpg'
import newImg from '../images/main_community.jpg'
import classImg from '../images/main_class2.jpg'

const Main = (props) => {
    return (
    <div>
        <div className={Styles.main_img}>
            <h2> Full access to all yoga classes</h2>
            <h3>$35/month</h3>
            <Link to="/users/new"><button className={Styles.button}>Sign Up</button></Link>
        </div>
        <div className={Styles.container}>
            <div className={Styles.card}>
                <img src={teacherImg} className={Styles.img} alt='main_img'></img>                            
                <h3>Meet our Instructors</h3>
                <p>meet our wondeful instructors! Start your yoga journey with great teachers </p>
                <Link to='/instructors'><button className={Styles.button}>Learn more</button></Link>
            </div>
            <div className={Styles.card}>
                <img src={classImg} className={Styles.img} alt='main_img'></img>
                <h3>Virtual Classes</h3>
                <p>connect with teachers and other students in our real-time online classes!</p>
                <Link to='/classes' className={Styles.linkStyle}><button className={Styles.button}>Learn more</button></Link>
            </div>
            <div className={Styles.card}>
                <img src={newImg} className={Styles.img} alt='main_img'></img>
                <h3>Community</h3>
                <p>Communicate with other students in our community dashboard. Share your story!</p>
                <Link to='/community'><button className={Styles.button}>Learn more</button></Link>
            </div>
            
        </div>
    </div>
    )
}

export default Main;
