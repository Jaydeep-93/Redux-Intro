import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => ({
  counter: 0,
  showCounter: true,
});

const counterSlice = createSlice({
  name: "counter",
  initialState: getInitialState(),
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incerase(state, action) {
      state.counter += action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice