import CartList from "./CartList";
import useCartDropdown from "./hooks/useCartDropdown";

const CartDropdown = ({ open, onClose }) => {
	const { totalPrice, cart, showCheckout, handleCheckout } =
		useCartDropdown(onClose);

	if (!open) return null;

	return (
		<div className="cart-dropdown">
			<div className="cart-header">
				<h3>Корзина</h3>
				<button onClick={onClose}>×</button>
			</div>

			<CartList />

			<div className="cart-footer">
				<div className="total">Итого: ${totalPrice}</div>
				<button
					className="checkout-btn"
					onClick={handleCheckout}
					disabled={cart.length === 0 || showCheckout}>
					{showCheckout ? "Оформляем..." : "Оформить заказ"}
				</button>
			</div>
		</div>
	);
};

export default CartDropdown;
