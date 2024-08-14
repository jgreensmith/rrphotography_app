import Layout from '../components/Layout';
import styles from '../styles/globals.scss';
import SimpleReactLightbox from 'simple-react-lightbox';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <div className={styles.page}>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </div>
    </Layout>
  ) 
}

export default MyApp;
