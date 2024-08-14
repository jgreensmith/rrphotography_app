import { sanityClient, urlFor } from "../../sanity"
import Link from "next/link"
import Head from 'next/head';

import styles from '../../styles/Posts.module.scss';

const Blog = ({ posts }) => {

    return (
        <>
        <Head>
            <title>Blog | Rebecca Reynolds Photography</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" property="og:description" content="Gain valuable insight into the life of a professional photographer" />
            <meta property="og:title" content="Blog | Rebecca Reynolds Photography" />
            <link rel="icon" href="/images/icon.png" />
        </Head>
        <section className={styles.section}>
            <div className={styles['block-container']}>
                <h1 className={`${styles["main-title"]} ${styles["heading"]}`}>Blog Posts</h1>
                <>
                {posts.length ? (
                    <div className={styles.postsContainer}>
                        <>
                            {posts.map((post, index) => (
                                <Link href={`/blog/${post.slug.current}`} >
                                    <div key={index} className={styles.card}>
                                        <img src={urlFor(post.mainImage).size(200, 200).quality(90).fit("min").url()} />
                                        <div className={styles.details}>
                                            <h2>{post.title}</h2>
                                            <p className={styles.date}>
                                                Posted: {post.publishedAt}
                                            </p>
                                            <p>
                                                {post.subTitle}
                                            </p>
                                        </div>                                        
                                    </div>
                                </Link> 
                            ))}
                        </>
                        
                    </div>
                ) : ( <h3>Blog posts coming soon, stay tuned!</h3> )}
                </>

                
              
                
            </div>
         
        </section> 
      
        </> 
    )
}

export const getServerSideProps = async () => {
    const query = '*[ _type == "post" ]'
    const posts = await sanityClient.fetch(query)

    if (!posts.length) {
        return {
            props: {
                posts: [],
            },
        }
    } else {
        return {
            props: {
                posts,
            },
        }
    }
}


export default Blog
