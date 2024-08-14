import React from 'react';
import Head from 'next/head';

import styles from '../styles/Contact.module.scss';

export default function Contact() {

  

  return (
      <>
        <Head>
            <title>Contact | Rebecca Reynolds Photography</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" property="og:description" content="Leave a message and I will get back to you as soon as I can, usually within 2 working days." />
            <meta property="og:title" content="Contact | Rebecca Reynolds Photography" />
            <link rel="icon" href="/images/icon.png" />
        </Head>
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Contact Me</h1>
                <div className={styles['contact-container']}>
                    <div className={styles.line}></div>
                    <div className={styles['contact-info-wrapper']}>
                        <p className={styles['contact-info']}>
                            Please get in touch if you would like to know more about my work.
                            <br></br>
                            <br></br>
                            You can find me on Instagram @rebeccareynolds935
                            <br></br>
                            <br></br>
                            Phone 01544 232785
                            <br></br>
                            <br></br>
                            Leave a message and I will get back to you as soon as I can, usually within 2 working days.
                        </p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles['form-wrapper']}>
                        <form className={styles['contact-form']} onSubmit={sendEmail}>
                            <input className={styles['form-item']} type="hidden" name="contact_number" />
                            <label className={styles['form-item']}>Name</label>
                            <input className={styles['form-item']} type="text" name="user_name" />
                            <label className={styles['form-item']}>Email</label>
                            <input className={styles['form-item']} type="email" name="user_email" />
                            <label className={styles['form-item']}>Message</label>
                            <textarea className={styles['form-item']} name="message" />
                            <div className={styles['button-wrapper']}>
                                <input className={styles['form-button']} type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
      </>
      
    
  );
}