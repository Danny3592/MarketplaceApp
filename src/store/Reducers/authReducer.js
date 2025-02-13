import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { jwtDecode } from 'jwt-decode';

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async function (info, { rejectWithValue, fulfillWithValue }) {
    try {
      const { data } = await api.post('/admin-login', info, {
        withCredentials: true,
      });
      localStorage.setItem('accessToken', data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const seller_login = createAsyncThunk(
  'auth/seller_login',
  async function (info, { rejectWithValue, fulfillWithValue }) {
    console.log('info = ', info);
    try {
      const { data } = await api.post('/seller-login', info, {
        withCredentials: true,
      });
      localStorage.setItem('accessToken', data.token);
      console.log('data = ', data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const seller_register = createAsyncThunk(
  'auth/seller_register',
  async function (info, { rejectWithValue, fulfillWithValue }) {
    try {
      const { data } = await api.post('/seller-register', info, {
        withCredentials: true,
      });

      localStorage.setItem('accessToken', data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const get_user_info = createAsyncThunk(
  'auth/get_user_info',
  async function (_, { rejectWithValue, fulfillWithValue }) {
    // console.log('info = ', info);
    try {
      const { data } = await api.get('/get-user', {
        withCredentials: true,
      });
      // console.log('data = ', data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const returnRole = (token) => {
  if (token) {
    const decodeToken = jwtDecode(token);
    const expireTime = new Date(decodeToken.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem('accessToken');
      return '';
    }
    return decodeToken;
  }
  return '';
};

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
    role: returnRole(localStorage.getItem('accessToken')).role,
    token: localStorage.getItem('accessToken'),
  },
  reducers: {
    messageClear: (state, _) => {
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.role = returnRole(payload.token).role;
      })

      .addCase(seller_register.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(seller_register.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(seller_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.role = returnRole(payload.token).role;
      })
      .addCase(seller_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(seller_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(seller_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.role = returnRole(payload.token).role;
      })
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload.userInfo;
      });
  },
});

export default authReducer.reducer;
export const { messageClear } = authReducer.actions;
