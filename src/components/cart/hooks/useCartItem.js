import { useActions } from "../../../hooks/redux/actions";

const useCartItem = (item) => {
	const { removeFromCart, updateQuantity } = useActions();

	const handleRemoveItem = () => {
		removeFromCart(item.id);
	};

	const handleUpdateQuantity = (quantity) => {
		if (quantity <= 0) {
			handleRemoveItem(item.id);
			return;
		}

		updateQuantity({ id: item.id, quantity });
	};

	const handleIncrementQuantity = () => handleUpdateQuantity(item.quantity + 1);
	const handleDecrementQuantity = () => handleUpdateQuantity(item.quantity - 1);

	return { handleIncrementQuantity, handleDecrementQuantity, handleRemoveItem };
};

export default useCartItem;
