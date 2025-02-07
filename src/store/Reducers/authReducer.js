import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async function (info, { rejectWithValue, fulfillWithValue }) {
    // console.log(info);
    try {
      const { data } = await api.post('/admin-login', info, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
  reducers: {
    messageClear: (state, _) => {
      state.errorMsg = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state, { payload }) => {
      state.loader = true;
    });
    builder.addCase(admin_login.fulfilled, (state, { payload }) => {
      state.loader = false;
      // state.successMsg = payload.fullfilled
    });
    builder.addCase(admin_login.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMsg = payload.error;
    });
  },
});

export default authReducer.reducer;
export const {messageClear} = authReducer.actions