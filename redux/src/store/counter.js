import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, toggle: true };

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const counterActions = CounterSlice.actions;

export default CounterSlice.reducer;
