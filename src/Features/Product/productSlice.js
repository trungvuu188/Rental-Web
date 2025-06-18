import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cateId: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateCategory(state, action) {
      return state = action.payload;
    },
  },
});

export const { updateCategory } = productSlice.actions;
export default productSlice.reducer;
