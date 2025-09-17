import { useAppSelector } from "@/hooks/redux";
import CartItem from "./CartItem";

const CartList = () => {
	const cartItems = useAppSelector((state) => state.cart.cart);

	if (cartItems.length === 0) return <p>Корзина пуста</p>;

	return (
		<div className="cart-items">
			{cartItems.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default CartList;
