import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
	},
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
