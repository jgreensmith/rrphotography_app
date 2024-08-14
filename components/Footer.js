import React from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/Components/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-container']}>
                <div className={styles['footer-object-wrapper']}>
                    <a href="https://www.instagram.com/rebeccareynolds935/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className={styles['i-icon']}/>
                    </a>
                    <a href="https://www.etsy.com/uk/shop/HergestMoonlight" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'etsy']} size="2x" className={styles['e-icon']}/>
                    </a> 
                </div>
                <div className={`${styles["footer-object-wrapper"]} ${styles["sm"]}`}>
                    <small className={styles.copyright}>&copy; 2021,  copyright for all images and content belongs to Rebecca Reynolds Photography. Images and content may not be downloaded, reproduced, manipulated or used in any way without our written consent.</small>
                </div>
                
                
               
            </div>
            
        </footer>
    );
};

export default Footer;