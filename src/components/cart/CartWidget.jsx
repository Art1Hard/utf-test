import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import CartDropdown from "./CartDropdown";

function CartWidget() {
	const cartCount = useAppSelector((state) => state.cart.cartCount);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="cart">
			<button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
				Корзина ({cartCount})
			</button>

			<CartDropdown open={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	);
}

export default CartWidget;
