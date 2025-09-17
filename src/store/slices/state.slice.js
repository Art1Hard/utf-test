import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	state: null,
};

export const stateSlice = createSlice({
	name: "state",
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},

		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const stateActions = stateSlice.actions;
export const stateReducer = stateSlice.reducer;
