import styles from '../styles/ProjectCards.module.css';
import buttonStyle from '../styles/Button.module.css';
import React from 'react';
import kcLogo from '../assets/kcLogo.png';
import moneyLogo from '../assets/moneyApp.png';
import deliveranceLogo from '../assets/deliveranceLogo.png';
import { NavLink } from 'react-router-dom';

function ProjectCards() {
  return (
    <div className={styles.projects}>
      <h1 className={styles['project-heading']}>Projects</h1>
      <div className={styles['card-container']}>
        <div className={styles.card}>
            <img src={kcLogo} alt='image' />
            <h2 className={styles['project-title']}>Kingdom Connect</h2>
            <div className={styles['project-details']}>
              <p>-Coming Soon-</p>
            </div>
            <div className={styles['project-btns']}>
              <NavLink to='url.com' className={`${buttonStyle.btn} ${styles.btn}`}>View</NavLink>
              <NavLink to='https://github.com/mfschultz/Kingdom_Connect_API' className={`${buttonStyle.btn} ${styles.btn}`}>Source</NavLink>
            </div>
        </div>
        <div className={styles.card}>
        <img src={moneyLogo} alt='image' />
            <h2 className={styles['project-title']}>My.Money</h2>
            <div className={styles['project-details']}>
              <p>-Coming Soon-</p>
            </div>
            <div className={styles['project-btns']}>
              <NavLink to='url.com' className={`${buttonStyle.btn} ${styles.btn}`}>View</NavLink>
              <NavLink to='url.com' className={`${buttonStyle.btn} ${styles.btn}`}>Source</NavLink>
            </div>
        </div>
        <div className={styles.card}>
        <img src={deliveranceLogo} alt='image' />
            <h2 className={styles['project-title']}>Deliver Me</h2>
            <div className={styles['project-details']}>
              <p>-Coming Soon-</p>
            </div>
            <div className={styles['project-btns']}>
              <NavLink to='url.com' className={`${buttonStyle.btn} ${styles.btn}`}>View</NavLink>
              <NavLink to='url.com' className={`${buttonStyle.btn} ${styles.btn}`}>Source</NavLink>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default ProjectCards;