import React, { useState } from 'react';
import Link from 'next/link';
import MenuItems from './menuitems';

import styles from '../styles/Components/Dropdown.module.scss';

function Dropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return(
        <>
        <ul 
            onClick={handleClick}
            className={click ? `${styles["dropdown-menu clicked"]}` : `${styles["dropdown-menu"]}`}
        >
            {MenuItems.map((item, index) => {
                return(
                    <li className={styles.dropdownList} key={index}>
                        <Link href={item.path}>
                            <a className={styles.dropdownLink} onClick={() => setClick(false)} >
                                {item.title}
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
        
    );

}

export default Dropdown;