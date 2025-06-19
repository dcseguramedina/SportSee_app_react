import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import { users, activity, averageSessions, performance } from '../../data/mockData.js';

// Interfaces
interface UserInfo {
    firstName: string;
    lastName: string;
    age: number;
}

interface KeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
}

interface User {
    id: number;
    userInfos: UserInfo;
    todayScore: number;
    keyData: KeyData;
}

interface ActivitySession {
    day: string;
    kilogram: number;
    calories: number;
}

interface Activity {
    userId: number;
    sessions: ActivitySession[];
}

interface AverageSession {
    day: number;
    sessionLength: number;
}

interface AverageSessions {
    userId: number;
    sessions: AverageSession[];
}

interface PerformanceKind {
    [key: number]: string;
}

interface PerformanceData {
    value: number;
    kind: number;
}

interface Performance {
    userId: number;
    kind: PerformanceKind;
    data: PerformanceData[];
}

// State types
interface UserState {
    users: User[];
    selectedUserId: number | null;
    userActivity: Activity | null;
    userAverageSessions: AverageSessions | null;
    userPerformance: Performance | null;
}

// Set up the initial state
const initialState: UserState = {
    users,
    selectedUserId: null,
    userActivity: null,
    userAverageSessions: null,
    userPerformance: null,
};

// Create an employee slice with the initial state
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        selectUser: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            state.selectedUserId = userId;
            state.userActivity = activity[userId] || null;
            state.userAverageSessions = averageSessions[userId] || null;
            state.userPerformance = performance[userId] || null;
        },
    },
});

export const { selectUser } = userSlice.actions;
export default userSlice.reducer;
