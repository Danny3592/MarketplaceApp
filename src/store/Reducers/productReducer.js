import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const add_product = createAsyncThunk(
  'product/add_product',
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

export const get_product = createAsyncThunk(
  'product/get_product',
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
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    products: [],
    totalProducts: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_product.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(add_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(add_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.categorys = [...state.categorys, payload.category];
      })

      .addCase(get_product.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(get_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(get_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.totalProducts = payload.totalProducts;
        state.products = payload.products;
      });
  },
});
//dqwdqwdqw//
export default productReducer.reducer;
export const { messageClear } = productReducer.actions;
