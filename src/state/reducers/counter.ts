import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter-slice",
	initialState: {
		counter: 0,
	},
	reducers: {
		increment: (state) => {
			state.counter = ++state.counter;
		},
		decrement: (state) => {
			state.counter = --state.counter;
		},
		incrementBy: (state, action) => {
			state.counter += (action.payload as { value: number }).value;
		},
		decrementBy: (state, action) => {
			state.counter -= (action.payload as { value: number }).value;
		},
	},
});

export const { increment, decrement, incrementBy, decrementBy } =
	counterSlice.actions;

export interface CounterState {
	counter: number;
}

export default counterSlice.reducer;
