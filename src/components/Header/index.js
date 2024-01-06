import React, { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import headerData from '../../data/data';
import { ReactComponent as DownArrow } from '../../assets/images/down-arrow.svg';
import { Link } from "react-router-dom";
import styles from './index.module.scss';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const { brand, menuItems } = headerData[0];

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link to="/" className={styles.logo}>
                        <img src={`./assets/images/${brand.image}`} alt="Logo" />
                    </Link>
                    <ul className={`${styles.menu} ${menuVisible ? styles.visible : ""}`}>
                        {menuItems.map(item => {
                            const { id, name, link, hasSubmenu } = item;
                            return <li key={id}>
                                <Link to={`${link}`}>
                                    {name}
                                    {hasSubmenu && (
                                        <span className={styles.submenuIcon}><DownArrow /></span>
                                    )}
                                </Link>
                            </li>
                        })}
                    </ul>
                    <button type="button" className={styles.btnLogin}>
                        Login
                    </button>
                    <button className={styles.toggleIcon} onClick={toggleMenu}>
                        {menuVisible ? <CgClose /> : <CgMenuRight />}
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
