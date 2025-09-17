export const recalculateCart = (state) => {
	state.cartCount = state.cart.reduce(
		(total, item) => total + item.quantity,
		0
	);
	state.cartItemsCount = state.cart.length;
	state.totalPrice = state.cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
};
