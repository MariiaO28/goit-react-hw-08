import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const handlePending = state => {
  state.loading = true;
};

// const handleRejected = (state, action) => {
//   state.loading= false;
//   state.error = action.payload.message;
// };

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,
    },
    extraReducers: builder => 
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(register.rejected, handleRejected)

            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(login.rejected, handleRejected)

            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                }
                state.token = null;
                state.isLoggedIn = false;
            })
            // .addCase(logout.rejected, handleRejected)

            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            // .addCase(refreshUser.rejected, handleRejected)
})

export const authReducer = authSlice.reducer;