import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const categoryAdd = createAsyncThunk(
  'category/categoryAdd',
  async function ({ name, image }, { rejectWithValue, fulfillWithValue }) {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);
      const { data } = await api.post('/category-add', formData, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const get_category = createAsyncThunk(
  'category/get_category',
  async function (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue },
  ) {
    try {
      const { data } = await api.get(
        `/category-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {},
        {
          withCredentials: true,
        },
      );
      console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const categoryReducer = createSlice({
  name: 'category',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    categorys: [],
    totalCategory:0
  },
  reducers: {
    messageClear: (state, _) => {
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryAdd.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(categoryAdd.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(categoryAdd.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.categorys = [...state.categorys, payload.category];
      })

      .addCase(get_category.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(get_category.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.totalCategory = payload.totalCategory;
        state.categorys = payload.categorys;

      });
  },
});

export default categoryReducer.reducer;
export const { messageClear } = categoryReducer.actions;
