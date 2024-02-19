import { createSlice } from '@reduxjs/toolkit'


const INITIAL_STATE = {
    authStatus: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        updateAuthStatus: (state, action) => {
            state.authStatus = action.payload;
        },
    },

});

export const { updateAuthStatus } = authSlice.actions;

export const authReducer = authSlice.reducer; 