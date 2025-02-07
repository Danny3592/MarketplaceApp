import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async function (info) {
    console.log(info)
    try {
      const { data } = await api.post('/admin-login', info, {
        
        withCredentials: true,
      });
      console.log(info)
    } catch (error) {}
  },
);

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMsg: '',
    errorMsg: '',
    loader: false,
    userInfo: '',
  },
  reducers: {},
  extraReducers: () => {},
});

export default authReducer.reducer;
