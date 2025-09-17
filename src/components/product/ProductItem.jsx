const ProductItem = ({ product, onAddToCart }) => {
	return (
		<div key={product.id} className="product-card">
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<div className="price">${product.price}</div>
			<button onClick={onAddToCart}>Добавить в корзину</button>
		</div>
	);
};

export default ProductItem;
