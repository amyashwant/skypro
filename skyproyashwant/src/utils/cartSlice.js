import { createSlice, isAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    viewItems: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items = [];
    },
    viewClearItem: (state) => {
      state.viewItems = [];
    },
    viewItem: (state, action) => {
      state.viewItems.push(action.payload);
    },
  },
});

export const { addItem, removeItem, clearItem, viewItem, viewClearItem } =
  cartSlice.actions;
export default cartSlice.reducer;
