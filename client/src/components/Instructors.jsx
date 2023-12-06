import React from 'react'
import Styles from './Instructors.module.css'

const Instructors = () => {
    return (
    <div>
        <div className={Styles.header}>
            <h1>Instructors</h1>                
        </div>
        <div className={Styles.container}>
            <div>
                <img className={Styles.img} src="https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_960_720.jpg" alt='inst'></img>
            </div>
            <div className={Styles.text}>
                <h4>Jenny</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus mi. Integer nec tempus sapien, gravida ultricies dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed fringilla nisl. Mauris id bibendum urna, ut vehicula dui. Mauris imperdiet, nisi non mattis pharetra, nisi tortor ultrices odio, at hendrerit dolor diam id nunc. Pellentesque vehicula nunc mattis </p>
            </div>
        </div>
        
        <div className={Styles.container}>
            <div>
                <img className={Styles.img} src="https://cdn.pixabay.com/photo/2020/02/15/00/33/yoga-4849681_960_720.jpg" alt='insr'></img>
            </div>
            <div className={Styles.text}>
                <h4>John</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus mi. Integer nec tempus sapien, gravida ultricies dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed fringilla nisl. Mauris id bibendum urna, ut vehicula dui. Mauris imperdiet, nisi non mattis pharetra, nisi tortor ultrices odio, at hendrerit dolor diam id nunc. Pellentesque vehicula nunc mattis  </p>
            </div>
        </div>
        <div className={Styles.container}>
            <div>
                <img className={Styles.img} src="https://cdn.pixabay.com/photo/2017/03/04/14/00/yoga-2116093_960_720.jpg" alt='insttruc'></img>
            </div>
            <div className={Styles.text}>
                <h4>Angela</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus mi. Integer nec tempus sapien, gravida ultricies dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed fringilla nisl. Mauris id bibendum urna, ut vehicula dui. Mauris imperdiet, nisi non mattis pharetra, nisi tortor ultrices odio, at hendrerit dolor diam id nunc. Pellentesque vehicula nunc mattis. </p>
            </div>
        </div>
        
    </div>
    )
}

export default Instructors