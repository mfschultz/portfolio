import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaCopyright } from 'react-icons/fa'

function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles['footer-container']}>
                <div className={styles.left}>
                    <div className={styles.location}>
                        <FaHome className={styles.icon} size={20} />
                        <div>
                            <p>1415 Atlantis Dr</p>
                            <p>Apopka, FL 32703</p>
                        </div>
                    </div>
                    
                    <div className={styles.phone}>
                        <h4>
                            <FaPhone className={styles.icon} size={20} />
                            +1 (240) 486-0158
                        </h4>
                    </div>
                    <div className={styles.phone}>
                        <h4>
                            <FaMailBulk className={styles.icon} size={20} />
                            info@kingdom-connect.com
                        </h4>
                    </div>
                </div>
                <div className={styles.right}>
                    <h4> About the Company</h4>
                    <p>
                        This is me, Trey Schultz, the CEO & Founder of KingdomConnect.
                        This company was founded on the principles of love, honor, diligence and truth.
                        I have a passion for building useful and efficient applications and I hope that 
                        I can serve you by helping your project reach the heavens.
                    </p>
                    <div className={styles.social}>
                        <Link to='https://www.linkedin.com/in/morris-schultz-4389498b/'>
                            <FaLinkedin className={styles['social-icon']} size={20} />
                        </Link>
                        <Link to='https://github.com/mfschultz'>
                            <FaGithub className={styles['social-icon']} size={20} />
                        </Link>
                    </div>
                    
                    
                </div>
                
            </div>
            <div className={styles.copyright}>
                <p>
                    <FaCopyright className={styles['copyright-icon']} size={10} /> 2023 KingdomBuilderConnect.com, All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;