import { createSlice } from "@reduxjs/toolkit";
import { recalculateCart } from "../../utils/cart.utils";

const initialState = {
	cart: [],
	cartCount: 0,
	totalPrice: 0,
	cartItemsCount: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const product = action.payload;
			const existingItem = state.cart.find((item) => item.id === product.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.cart.push({ ...product, quantity: 1 });
			}

			recalculateCart(state);
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);

			recalculateCart(state);
		},

		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const item = state.cart.find((item) => item.id === id);

			if (item) {
				item.quantity = quantity;
			}

			recalculateCart(state);
		},

		clearCart: (state) => {
			state.cart = [];
			recalculateCart(state);
		},
	},
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
