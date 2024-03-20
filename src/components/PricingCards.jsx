import styles from '../styles/PricingCards.module.css';
import buttonStyle from '../styles/Button.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function PricingCards() {
  return (
    <div className={styles.pricing}>
      <h1 className={styles['pricing-heading']}>Pricing</h1>
      <div className={styles['card-container']}>
        <div className={styles.card}>
            <h3>- Basic -</h3>
            <span className={styles.bar}></span>
            <p className={styles.btc}>$1200</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <div className={styles['pricing-btn']}>
              <Link to='/contact' className={`${buttonStyle.btn} ${styles.btn}`}>GET A QUOTE</Link>
            </div>
            
        </div>
        <div className={styles.card}>
            <h3>- Premium -</h3>
            <span className={styles.bar}></span>
            <p className={styles.btc}>$2000</p>
            <p>- 5 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <div className={styles['pricing-btn']}>
              <Link to='/contact' className={`${buttonStyle.btn} ${styles.btn}`}>GET A QUOTE</Link>
            </div>
        </div>
        <div className={styles.card}>
            <h3>- Business -</h3>
            <span className={styles.bar}></span>
            <p className={styles.btc}>$3200</p>
            <p>- 7 Days -</p>
            <p>- 8 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <div className={styles['pricing-btn']}>
              <Link to='/contact' className={`${buttonStyle.btn} ${styles.btn}`}>GET A QUOTE</Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default PricingCards;