import BlockContent from '@sanity/block-content-to-react'; 

import styles from '../../styles/Post.module.scss'

const Post = () => {

     const body = ""
     const title = ""
     const mainImage = ""
     const publishedAt = "" 

    return(
        
        <> 
            <div className={styles.blogBox}>
                <div className={styles.mainImg}>
                    {/* <img src={ urlFor(mainImage).fit("max").quality(90).url() } alt="blog main image" /> */}
                </div>
                <h1 className={`${styles["heading"]} ${styles["blogTitle"]}`}>{ title }</h1>
                <h3 className={styles.subTitle}>{`Rebecca Reynolds ${publishedAt}`}</h3>
                <article>
                    {/* <BlockContent 
                        className={styles.blockContent}
                        blocks={body} 
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                    /> */}
                </article>

            </div>   
        </> 
    )
}


export default Post;