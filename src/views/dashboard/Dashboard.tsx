import React from 'react';
import { users } from "../../data/mockData.js";
import styles from "./Dashboard.module.css";

// Example: Get user 12's info
const user12 = users.find((u) => u.id === 12);
console.log(user12);

const userId = 18;

const Dashboard: React.FC = () => {
    const user = users.find((u) => u.id === userId);

    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardHeader}>
                <div className={styles.dashboardTitle}>
                    <h1 className={styles.title}>Bonjour <span>{user ? user.userInfos.firstName : ''}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className={styles.dashboardSelect}>
                    <label htmlFor="userSelect">User</label>
                    <select id="userSelect">
                        <option value="">Select a user</option>
                        <option value="user1">User 12</option>
                        <option value="user2">User 18</option>
                    </select>
                    <label htmlFor="serviceSelect">Service</label>
                    <select id="serviceSelect">
                        <option value="">Select a service</option>
                        <option value="service1">Mock Service</option>
                        <option value="service2">API Service</option>
                    </select>
                </div>

            </div>
            <div className={styles.dashboardContent}>
                <section className={styles.mainSection}>
                    <div id="chart-daily" className={styles.chart}>

                    </div>
                    <div className={styles.chartsRow}>
                        <div id="chart-objectif" className={styles.card}>

                        </div>
                        <div id="chart-radar" className={styles.card}>

                        </div>
                        <div id="chart-kpi" className={styles.card}>

                        </div>
                    </div>
                </section>
                <section className={styles.mainAside}>
                    <div id="badge-calories" className={styles.badge}>

                    </div>
                    <div id="badge-proteines" className={styles.badge}>

                    </div>
                    <div id="badge-glucides" className={styles.badge}>

                    </div>
                    <div id="badge-lipides" className={styles.badge}>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
