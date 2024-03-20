import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [showNav, setShowNav] = useState(false);
    const [color, setColor] = useState(false);

    const handleShowNav = () => setShowNav(!showNav)
    const handleChangeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', handleChangeColor);

    return (
        <div className={`${styles.header} ${color ? styles.headerBg : ''}`}>
            <Link to='/'>
                <h1>
                    My.Folio
                </h1>
            </Link>
            <ul className={`${styles['nav-menu']} ${showNav ? styles['nav-menu-active'] : ''}`}>
                <li>
                    <Link to='/' onClick={handleShowNav}>Home</Link>
                </li>
                <li>
                    <Link to='/project' onClick={handleShowNav}>Project</Link>
                </li>
                <li>
                    <Link to='/about' onClick={handleShowNav}>About</Link>
                </li>
                <li>
                    <Link to='/contact' onClick={handleShowNav}>Contact</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={handleShowNav}>
                {showNav ? (
                    <FaTimes size={20}/>
                ) : (
                    <FaBars size={20}/>
                )}
                
                
            </div>        
        </div>
    )
}

export default Header;