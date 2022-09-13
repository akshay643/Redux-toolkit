import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    addBy(state, action) {
      state.counter += 10;
    },
  },
});

export const actions = counterSlice.actions;

const Store = configureStore({
  reducer: counterSlice.reducer,
});

export default Store;
