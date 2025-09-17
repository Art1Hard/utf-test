import { useActions } from "@/hooks/redux/actions";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
	const { addToCart } = useActions();

	return (
		<div className="products">
			{products.map((product) => (
				<ProductItem
					key={product.id}
					product={product}
					onAddToCart={() => addToCart(product)}
				/>
			))}
		</div>
	);
};

export default ProductList;
