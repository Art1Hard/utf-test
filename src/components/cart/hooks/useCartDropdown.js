import { useState } from "react";
import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/redux/actions";

const useCartDropdown = (closeCallback) => {
	const totalPrice = useAppSelector((state) => state.cart.totalPrice);
	const cart = useAppSelector((state) => state.cart.cart);

	const { clearCart } = useActions();

	const [showCheckout, setShowCheckout] = useState(false);

	const handleCheckout = () => {
		setShowCheckout(true);
		alert("Заказ оформлен!");
		clearCart();
		setShowCheckout(false);
		closeCallback();
	};

	return { totalPrice, cart, showCheckout, handleCheckout };
};

export default useCartDropdown;
