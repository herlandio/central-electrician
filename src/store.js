import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    token: localStorage.getItem('token'),
    error: null,
    success: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            state.success = null;
            localStorage.setItem('token', action.payload.token);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = null;
            state.success = null;
            localStorage.removeItem('token');
        },
        register(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            state.success = action.payload.message;
            localStorage.setItem('token', action.payload.token);
        },
        setMessage(state, action) {
            const { type, message } = action.payload;
            if (type === 'error') {
                state.error = message;
                state.success = null;
            } else if (type === 'success') {
                state.success = message;
                state.error = null;
            }
        },
        clearMessages(state) {
            state.error = null;
            state.success = null;
        },
    },
});

export const { login, logout, register, setMessage, clearMessages } = authSlice.actions;

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default store;
