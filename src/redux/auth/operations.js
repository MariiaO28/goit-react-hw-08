import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setAuthHeader(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function clearAuthHeader() {
    axios.defaults.headers.common["Authorization"] = '';
}

export const register = createAsyncThunk('auth/register',
    async (newUser, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', newUser);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const login = createAsyncThunk('auth/login',
    async (userCredentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', userCredentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logout = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        setAuthHeader(reduxState.auth.token);

        const response = await axios.get('/users/current');
        return response.data;
    }, {

    condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
    },
  }
);