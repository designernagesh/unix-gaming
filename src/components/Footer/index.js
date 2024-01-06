import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import splash from '../../assets/images/footer-purple-splash.png';
import { socialLinksData } from '../../data/data';
import styles from './index.module.scss';

function Footer() {
    return (
        <section className={styles.footer} style={{ backgroundImage: `url(${splash})` }}>
            <div className={styles.container}>
                <div className={styles.footerLogo}>
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <ul className={styles.socialLinks}>
                    {socialLinksData.map(item => {
                        const { id, icon, name } = item;
                        return <li key={id}>
                            <Link to={`${name}`}>
                                <img src={`../assets/images/${icon}`} alt={name} />
                            </Link>
                        </li>
                    }
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Footer