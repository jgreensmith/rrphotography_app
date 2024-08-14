import React from 'react';
import Head from 'next/head';

import styles from '../styles/About.module.scss';

function About() {
    return (
        <>
        <Head>
            <title>About | Rebecca Reynolds Photography</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" property="og:description" content="My aim is for my photography and art to show my love for the British countryside and the tranquility it gives." />
            <meta property="og:title" content="About | Rebecca Reynolds Photography" />
            <link rel="icon" href="/images/icon.png" />
        </Head>
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>About Me</h1>
                <div className={styles['about-container']}>
                    <div className={styles['about-info-wrapper']}>
                        <h3 className={styles['blurb-header']}>
                            Made in the Marches Resident Artist - Border Monochrome Photographer of the year 2020
                        </h3>
                        <p className={styles['about-info']}>
                            visit the resident artists section of the 
                            <a href="http://www.madeinthemarches.com/rebecca-reynolds-resident.html" target="_blank" rel="noreferrer">
                                <br></br>Made in the Marches website.
                            </a>
                        </p>
                        <p className={styles['about-info']}>
                            My aim is for my photography and art to show my love for the British countryside
                            and the tranquility it gives. Having family and friends who live with long-term conditions,
                            with depression, anxiety and other difficulties, it is wonderful to see how uplifting and 
                            transformative a beautiful view, a bird, or even a piece of grass can be.</p>
                        
                        <p className={styles['about-info']}>
                            The natural world is so rich in its variety. 
                            The same landscape never looks or feels the same, 
                            as the weather and the seasons constantly transform the 
                            views with different colours, shadows and light.  
                            Having firsthand experience with the benefits of nature to 
                            mental health and wellbeing, I want to bring them to as many 
                            people as possible, recognising that not everyone is able 
                            to get out and experience it for themselves. This is my vision.</p>
                        
                        <h3 className={styles['blurb-header']}>
                            My Pledge:
                        </h3>
                        <p className={styles['about-info']}>
                            10% of the profits raised by sales of prints will be given to my nominated charities. 
                            For 2021, my charities are:
                        </p>   
                        <ul>
                            <li><p className={styles['about-info']}>Alzheimer's Society</p></li>
                            <li><p className={styles['about-info']}>The Woodland Trust </p></li>
                            <li><p className={styles['about-info']}>RNLI</p></li>
                        </ul> 
                        <p className={styles['about-info']}>
                            If you would like any profits from your purchase to go to a charity of your choice, 
                            please let me know and I will make the donation on your behalf.</p>
                    </div>
                    <div className={styles['profile-wrapper']}>
                        <div className={styles['profile-photo-wrapper']}>
                            <img className={styles['temp-img-size']} src="/images/home/profile-og.jpg" alt="Profile"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
        
    )
}

export default About;