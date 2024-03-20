import React from 'react';
import styles from '../styles/AltHero.module.css';

function AltHero( { heading, text } ) {
  return (
    <div className={styles['hero-img']}>
        <div className={styles.heading}>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AltHero;