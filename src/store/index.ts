import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/dashboard/userSlice.ts';

// Set up a Redux store using Redux Toolkit

/* configureStore is called to create the Redux store
   The reducer object combines multiple reducers into the root reducer:
    dashboard slice of the state will be managed by userReducer
 */

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;