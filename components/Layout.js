import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Components/Layout.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fab);

const Layout = ({ children }) => {
    return(
        <div className={styles.App}>
            <Navbar />
                { children }
            <Footer />
        </div>
    );
}

export default Layout;
