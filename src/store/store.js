import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/product.slice";
import { cartReducer } from "./slices/cart.slice";
import { stateReducer } from "./slices/state.slice";
import { userReducer } from "./slices/user.slice";

export const store = configureStore({
	reducer: {
		product: productReducer,
		cart: cartReducer,
		user: userReducer,
		state: stateReducer,
	},
});
