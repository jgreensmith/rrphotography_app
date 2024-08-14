import { sanityClient, urlFor } from "../sanity"
import { SRLWrapper } from 'simple-react-lightbox';
import Head from 'next/head';

import styles from '../styles/Gallery/Cyanotype.module.scss';

const Cyanotype = ({ imageData }) => {
    console.log(imageData)
    
    return (
        <>
          <Head>
            <title>Cyanotype | Rebecca Reynolds Photography</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" property="og:description" content="click image to inspect detail" />
            <meta property="og:title" content="Cyanotype | Rebecca Reynolds Photography" />
            <link rel="icon" href="/images/icon.png" />
          </Head>
          <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Cyanotype Photography</h1>
                
                <div className={styles['gallery-container']}>
                    {imageData.map((cyanotype, index) => {
                        return(
                          <SRLWrapper>
                            <div className={styles['gallery-square']} key={index}>
                              <a className={styles['img-centre']} href={urlFor(cyanotype.cyanotypeImage).quality(100).fit("max").url()}>
                                <img 
                                  className={styles.opacity}
                                  src={urlFor(cyanotype.cyanotypeImage).size(600, 600).quality(90).fit("min").url()} 
                                  alt={cyanotype.alt}
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
    const query = '*[ _type == "cyanotype"]'
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

export default Cyanotype;
