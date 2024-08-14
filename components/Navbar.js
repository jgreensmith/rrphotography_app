
import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons'


import styles from '../styles/Components/Navbar.module.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <>
        <nav className={styles['main-nav']}>
            <Link href="/" >
                <a className={styles['brand-wrapper']} onClick={closeMobileMenu}>
                    <div className={styles['brand-title']}>
                            <span className={styles['span-title']}>Rebecca Reynolds </span>
                            Photography
                    </div>
                </a>
                    
            </Link>
                <div className={styles['menu-icon']} onClick={handleClick}>
                    {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }
                </div>
                <ul className={click ? `${styles["nav-menu"]} ${styles["active"]}` : `${styles["nav-menu"]}`}>
                    <li className={styles['nav-item']}>
                        <Link href="/">
                            <a className={styles['nav-link']} onClick={closeMobileMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/about">
                            <a className={styles['nav-link']} onClick={closeMobileMenu}>About</a>
                        </Link>
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/blog">
                            <a className={styles['nav-link']} onClick={closeMobileMenu}>Blog</a>
                        </Link>
                    </li>
                    <li 
                        className={styles['nav-item']}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link href="/gallery">
                            <a className={styles['nav-link']} onClick={closeMobileMenu}>Gallery <span className={styles.caret} ><FontAwesomeIcon icon={faCaretDown} /></span></a>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className={styles['nav-item']}>
                        <Link href="/contact">
                            <a className={styles['nav-link']} onClick={closeMobileMenu}>Contact</a>
                        </Link>
                    </li>
                </ul>
        </nav>
        <br></br>
        </>
    );

}


export default Navbar;


