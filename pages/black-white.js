import { sanityClient, urlFor } from "../sanity"
import Head from 'next/head';
import { SRLWrapper } from 'simple-react-lightbox';

import styles from '../styles/Gallery/BlackWhite.module.scss';

const BlackWhite = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
          <Head>
            <title>Black & White | Rebecca Reynolds Photography</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" property="og:description" content="click image to inspect detail" />
            <meta property="og:title" content="Black & White | Rebecca Reynolds Photography" />
            <link rel="icon" href="/images/icon.png" />
          </Head>
          <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Black and White Photography</h1>
                
                <div className={styles['gallery-container']}>
                    {imageData.map((blackwhite, index) => {
                        return(
                          <SRLWrapper>
                            <div className={styles['gallery-square']} key={index}>
                              <a className={styles['img-centre']} href={urlFor(blackwhite.blackwhiteImage).quality(100).url()}>
                                <img 
                                  className={styles.opacity}
                                  src={urlFor(blackwhite.blackwhiteImage).size(600, 600).quality(90).fit("min").url()} 
                                  alt={blackwhite.alt}
                                />
                              </a> 
                            </div>
                          </SRLWrapper>
                        )
                    })} 
                </div>
            </div>
          </section> 
        
       </> 
    )
}

export const getServerSideProps = async () => {
    const query = '*[ _type == "blackwhite"]'
    const imageData = await sanityClient.fetch(query)
  
    if (!imageData.length) {
      return {
        props: {
          imageData: [],
        },
      }
    } else {
      return {
        props: {
          imageData,
        },
      }
    }
  }

export default BlackWhite;
