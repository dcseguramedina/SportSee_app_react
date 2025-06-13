import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/header/Header.tsx'
import SideBar from '../components/sideBar/SideBar.tsx';
import styles from './Layout.module.css';

const Layout: React.FC = () => (
    <>
        <header className={styles.appHeader}>
            <Header />
        </header>
        <main className={styles.appContent}>
            <aside className={styles.sidebar}>
                <SideBar />
            </aside>
            <section className={styles.content}>
                <Outlet />
            </section>
        </main>
    </>
);

export default Layout;