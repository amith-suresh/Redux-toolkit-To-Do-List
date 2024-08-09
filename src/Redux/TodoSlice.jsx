import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const todosSlice = createSlice({
  name: 'TodoApp',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action) => {
      state.data = state.data.filter(item => item !== action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { addItem, removeItem } = todosSlice.actions;
