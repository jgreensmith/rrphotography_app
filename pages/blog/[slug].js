import { sanityClient, urlFor } from "../../sanity";
import BlockContent from '@sanity/block-content-to-react'; 

import styles from '../../styles/Post.module.scss'

const Post = ({ body, title, mainImage, publishedAt }) => {
    return(
        
        <> 
            <div className={styles.blogBox}>
                <div className={styles.mainImg}>
                    <img src={ urlFor(mainImage).fit("max").quality(90).url() } alt="blog main image" />
                </div>
                <h1 className={`${styles["heading"]} ${styles["blogTitle"]}`}>{ title }</h1>
                <h3 className={styles.subTitle}>{`Rebecca Reynolds ${publishedAt}`}</h3>
                <article>
                    <BlockContent 
                        className={styles.blockContent}
                        blocks={body} 
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    />
                </article>

            </div>   
        </> 
    )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug;

    const query = `*[ _type == "post" && slug.current == $pageSlug ][0] {
        title,
        mainImage,
        publishedAt,
        body
    }`

    const post = await sanityClient.fetch(query, { pageSlug });

    if (!post) {
        return {
            props: null,
            notFound: true
        }
    } else {
        return {
            props: {
                title: post.title,
                mainImage: post.mainImage,
                publishedAt: post.publishedAt,
                body: post.body,
            }
        }
    }
}

export default Post;