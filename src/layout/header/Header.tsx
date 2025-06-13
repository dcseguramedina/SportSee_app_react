import React from 'react';
import {NavLink} from 'react-router-dom';
import logoSportsee from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.headerContent}>
            <div className={styles.headerLogo}>
                <img
                    src={logoSportsee}
                    alt="Logo SportSee"
                />
            </div>
            <nav className={styles.headerNav} aria-label="Main navigation">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">Profil</NavLink>
                <NavLink to="/">Réglage</NavLink>
                <NavLink to="/">Communauté</NavLink>
            </nav>
        </header>
    );
};

export default Header;