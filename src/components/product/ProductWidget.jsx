import ProductList from "./ProductList";
import Filters from "./filters/Filters";
import useProducts from "./hooks/useProducts";

function ProductWidget() {
	const { products, filteredProducts, setFilteredProducts, states } =
		useProducts();

	if (states.loading) {
		return <div className="loading">Загрузка товаров...</div>;
	}

	return (
		<div className="product-list">
			<Filters products={products} onFilteredChange={setFilteredProducts} />
			<ProductList products={filteredProducts} />
		</div>
	);
}

export default ProductWidget;
