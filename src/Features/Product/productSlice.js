import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: '',  
  productId: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDetail: (state, action) => {
        state.category = action.type;
        state.productId = action.payload;
    }
  },
});

export const { setProductDetail } = productSlice.actions;
export default productSlice.reducer;
