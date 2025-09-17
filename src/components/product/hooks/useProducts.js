import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/redux/actions";
import { MOCK_PRODUCTS } from "@/constants/product.constants";

const useProducts = () => {
	const products = useAppSelector((state) => state.product.products);
	const loading = useAppSelector((state) => state.state.loading);
	const { setProducts, setLoading } = useActions();
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		setProducts(MOCK_PRODUCTS);
		setLoading(false);
	}, []);

	return {
		products,
		filteredProducts,
		setFilteredProducts,
		states: { loading },
	};
};

export default useProducts;
