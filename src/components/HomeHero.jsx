import React from 'react';
import styles from '../styles/HomeHero.module.css';
import buttonStyle from '../styles/Button.module.css';
import { Link } from 'react-router-dom';
import IntroImg from '../assets/blueBg.png';


const HomeHero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.mask}>
            <img className={styles['intro-img']} src={IntroImg} />
        </div>
        <div className={styles.content}>
          <p>Hello, my name is Trey.  I am an experienced Full-Stack Web Developer.</p>
          <h1>Python and React Web Development</h1>
          <div>
            <Link to='/project' className={buttonStyle.btn}>Project</Link>
            <Link to='/contact' className={`${buttonStyle.btn} ${buttonStyle['btn-light']}`}>Contact</Link>
          </div>
        </div>
    </div>
    
  )
}

export default HomeHero;