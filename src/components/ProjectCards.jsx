import styles from '../styles/ProjectCards.module.css';
import buttonStyle from '../styles/Button.module.css';
import React from 'react';
import kcLogo from '../assets/kcLogo.png';
import nusaLogo from '../assets/numbersUSA.jpg';
import sfLogo from '../assets/secureFlight.jpg';
import { NavLink } from 'react-router-dom';

function ProjectCards() {
  return (
    <div className={styles.projects}>
      <h1 className={styles['project-heading']}>Past and Present Projects</h1>
      <div className={styles['card-container']}>
        <div className={styles.card}>
            <img src={kcLogo} alt='image' />
            <h2 className={styles['project-title']}>KingdomConnect</h2>
            <div className={styles['project-details']}>
              <h5>-Coming Soon-</h5>
              <p>KingdomConnect serves as hub to connect Christians with businesses submitted under the authority of Jesus Christ.  All member businesses take a pledge, that when violated, can result in the termination of their membership.  Through this accountability members will grow in honor, discipline, stewardship and a love for God and the people He created in His likeness.</p>
            </div>
            <div className={styles['project-btns']}>
              <NavLink to='https://kingdom-connect.com' className={`${buttonStyle.btn} ${styles.btn}`}>View</NavLink>
            </div>
        </div>
        <div className={styles.card}>
        <img src={nusaLogo} alt='image' />
            <h2 className={styles['project-title']}>NumbersUSA</h2>
            <div className={styles['project-details']}>
              <h5>-October 2019 to December 2021-</h5>
              <p>NumbersUSA provides tools, resources, and access, so that your voice is heard by the Federal and State elected officials who represent you. They provide information on issues, current immigration numbers, voting record “Grade Cards”, and an constantly updated “Action Board” filled with what actions you can take.</p>
            </div>
            <div className={styles['project-btns']}>
              <NavLink to='https://www.numbersusa.com/' className={`${buttonStyle.btn} ${styles.btn}`}>View</NavLink>
            </div>
        </div>
        <div className={styles.card}>
        <img src={sfLogo} alt='image' />
            <h2 className={styles['project-title']}>SecureFlight</h2>
            <div className={styles['project-details']}>
              <h5>-March 2015 to August 2019-</h5>
              <p>The purpose of the Secure Flight program is to screen individuals before they access airport sterile areas or board aircraft.  This screening is designed to identify individuals who may be a threat to transportation or national security and to ensure enhanced screening prior to boarding an aircraft.</p>
            </div>
            <div className={styles['project-btns']}>
              <NavLink to='https://www.dhs.gov/publication/dhstsapia-018-tsa-secure-flight' className={`${buttonStyle.btn} ${styles.btn}`}>View</NavLink>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default ProjectCards;