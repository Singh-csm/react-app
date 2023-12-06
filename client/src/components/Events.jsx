import React from 'react'
import Styles from './Events.module.css'
import googlmap_img from '../images/googlemap_example.jpg'

const Events = () => {
return (
    <div>
        <div className={Styles.header}>
            <h1>Outdoor Events</h1>                
        </div>
        
        <div className={Styles.container}>            
            <div className={Styles.text}>
                <h2>Saturday Morning Yoga</h2>
                <p>Saturday, April 2</p>
                <p>Location: Seven Seas Park, 1010 Morse Ave, Sunnyvale, CA 94089 </p>
                <img src={googlmap_img} alt='img'></img>
                <button className={Styles.button}>Sign Up</button>                
            </div>
            
            <div>
                <img className={Styles.img} src="https://cdn.pixabay.com/photo/2019/11/20/12/04/yoga-4639895_960_720.jpg" alt='img1'></img>
            </div>
        </div>

        <div className={Styles.container}>            
            <div className={Styles.text}>
                <h2>Saturday Morning Yoga</h2>
                <p>Saturday, April 2</p>
                <p>Location: Seven Seas Park, 1010 Morse Ave, Sunnyvale, CA 94089 </p>
                <img src={googlmap_img} alt='img2'></img>
                <button className={Styles.button}>Sign Up</button>                
            </div>
            
            <div>
                <img className={Styles.img} src="https://cdn.pixabay.com/photo/2019/11/20/12/04/yoga-4639895_960_720.jpg" alt='img3'></img>
            </div>
        </div>
    </div>
)
}

export default Events