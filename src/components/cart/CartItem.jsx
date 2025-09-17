import useCartItem from "./hooks/useCartItem";

const CartItem = ({ item }) => {
	const { handleIncrementQuantity, handleDecrementQuantity, handleRemoveItem } =
		useCartItem(item);

	return (
		<div key={item.id} className="cart-item">
			<img src={item.image} alt={item.name} />
			<div className="item-details">
				<h4>{item.name}</h4>
				<p>${item.price}</p>
				<div className="quantity-controls">
					<button onClick={handleDecrementQuantity}>-</button>
					<span>{item.quantity}</span>
					<button onClick={handleIncrementQuantity}>+</button>
				</div>
			</div>
			<button className="remove-btn" onClick={handleRemoveItem}>
				Удалить
			</button>
		</div>
	);
};

export default CartItem;
