import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	error: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
