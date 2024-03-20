import { Link } from 'react-router-dom';
import styles from '../styles/AboutContent.module.css';
import buttonStyles from '../styles/Button.module.css';
import React from 'react';
import stackImg1 from '../assets/NewTwitter.png';
import stackImg2 from '../assets/ReactCode.png';


function AboutContent() {
  return (
    <div className={styles.about}>
        <div className={styles.left}>
            <h1>Who Am I?</h1>
            <p>I am a Full-Stack Software Developer. I create, maintain, and update
                responsive secure web applications for my clients.
            </p>
            <Link to='/contact'className={buttonStyles.btn}>Contact</Link>
        </div>
        <div className={styles.right}>
            <div className={styles['img-container']}>
                <div className={styles['img-stack-top']}>
                    <img src={stackImg1} className={styles.img} alt='true' />
                </div>
                <div className={styles['img-stack-bottom']}>
                    <img src={stackImg2} className={styles.img} alt='true' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;