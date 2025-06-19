import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Dashboard.module.css";
import type {AppDispatch, RootState} from "../../store/types.ts";
import {selectUser} from "./userSlice.ts";

const Dashboard: React.FC = () => {

    // Redux states
    const dispatch = useDispatch<AppDispatch>();

    // Select user 18 on mount
    useEffect(() => {
        dispatch(selectUser(18));
    }, [dispatch]);

    // Select the current user data from Redux
    const users = useSelector((state: RootState) => state.user.users);
    console.log(users);
    const selectedUserId = useSelector((state: RootState) => state.user.selectedUserId);
    console.log(selectedUserId);
    // Find the selected user in the users array
    const selectedUser = users.find((user) => user.id === selectedUserId);
    console.log(selectedUser);
    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardHeader}>
                <div className={styles.dashboardTitle}>
                    <h1 className={styles.title}>Bonjour <span>{selectedUser ? selectedUser.userInfos.firstName : ''}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className={styles.dashboardSelect}>
                    <label htmlFor="userSelect">User</label>
                    <select
                        id="userSelect"
                        value={selectedUserId || ''}
                        onChange={(e) => {
                            const userId = Number(e.target.value);
                            dispatch(selectUser(userId));
                        }}
                    >
                        <option value="">Select a user</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.userInfos.firstName} {user.userInfos.lastName} (ID: {user.id})
                            </option>
                        ))}
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
