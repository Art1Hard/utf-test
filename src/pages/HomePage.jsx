import ProductWidget from "../components/product/ProductWidget";
import CartWidget from "../components/cart/CartWidget";

const HomePage = () => {
	return (
		<div className="main-content">
			<ProductWidget />
			<CartWidget />
		</div>
	);
};

export default HomePage;
