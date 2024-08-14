import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styles from '../styles/Gallery/Gallery.module.scss';

function Gallery() {
    return(
        <>
        <Head>
            <title>Gallery | Rebecca Reynolds Photography</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" property="og:description" content="A creative and diverse collection of Wildlife, Black and White, Landscape and Cyanotype images" />
            <meta property="og:title" content="Gallery | Rebecca Reynolds Photography" />
            <link rel="icon" href="/images/icon.png" />
        </Head>
        <section className={styles.section}>
            <div className={styles['block-container']}>
            <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Gallery</h1>
                <div className={styles['object-container']}>
                    <div className={styles['object-wrapper']}>
                        <Link href="/landscape">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/ls-circle.jpg" alt="Landscape"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Landscape Photography</h3>
                                    <p className={styles.blurb}>Landscapes, Seascapes and Skyscapes</p>
                                </div>
                            </a>
                            
                        </Link>
                        
                    </div>
                    <div className={styles['object-wrapper']}>
                        <Link href="/wildlife">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/wl-circle.jpg" alt="Wildlife"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Wildlife Photography</h3>
                                    <p className={styles.blurb}>Flora and Fauna</p>
                                </div>
                            </a>

                            
                        </Link>  
                    </div>
                    <div className={styles['object-wrapper']}>
                        <Link href="/cyanotype">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/c-circle.jpg" alt="cyanotype"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Cyanotype Art</h3>
                                    <p className={styles.blurb}>Inspired by the Natural Landscape</p>
                                </div>
                            </a>

                            
                        </Link>
                    </div>
                    <div className={styles['object-wrapper']}>
                        <Link href="/black-white">
                            <a className={styles.decoration}>
                                <div className={styles['object-img-wrapper']}>
                                    <img className={styles['img-fit']} src="images/home/bw-circle.jpg" alt="blackwhite"></img>
                                </div>
                                <div className={styles['object-info-wrapper']}>
                                    <h3 className={styles['blurb-header']}>Black & White Photography</h3>
                                    <p className={styles.blurb}>The Natural World in Black & White</p>
                                </div>
                            </a>


                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>

        

    )
};

export default Gallery;