import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: {
    products: [],
  },
  status: "success",
};

export const productListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductListRequest(state) {
      state.status = "Pending";
    },
    getProductListSuccess(state, action) {
      state.status = "Success";
      state.productList = action.payload;
    },
    getProductListFailure(state, action) {
      state.status = "Failed";
      state.error = action.payload;
    },
  },
});

export const {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
} = productListSlice.actions;

export default productListSlice.reducer;
