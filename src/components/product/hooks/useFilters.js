import { useEffect, useState } from "react";

const useFilters = (products, filterChangeCallback) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sortBy, setSortBy] = useState("name");

	const [showFilters, setShowFilters] = useState(false);

	useEffect(() => {
		const result = products
			.filter((product) => {
				const matchesSearch = product.name
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
				const matchesCategory =
					selectedCategory === "all" || product.category === selectedCategory;
				return matchesSearch && matchesCategory;
			})
			.sort((a, b) => {
				if (sortBy === "name") return a.name.localeCompare(b.name);
				if (sortBy === "price") return a.price - b.price;
				return 0;
			});

		filterChangeCallback(result);
	}, [products, searchTerm, selectedCategory, sortBy]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value);
	};

	const handleSortChange = (e) => {
		setSortBy(e.target.value);
	};

	const handleShowFilters = () => setShowFilters(!showFilters);

	return {
		searchTerm,
		selectedCategory,
		sortBy,
		showFilters,
		handles: {
			handleSearchChange,
			handleCategoryChange,
			handleSortChange,
			handleShowFilters,
		},
	};
};

export default useFilters;
