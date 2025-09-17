import useFilters from "../hooks/useFilters";

const Filters = ({ products, onFilteredChange }) => {
	const { searchTerm, selectedCategory, sortBy, showFilters, handles } =
		useFilters(products, onFilteredChange);

	return (
		<div className="filters">
			<div className="search">
				<input
					type="text"
					placeholder="Поиск товаров..."
					value={searchTerm}
					onChange={handles.handleSearchChange}
				/>
			</div>

			<div className="filter-controls">
				<select
					value={selectedCategory}
					onChange={handles.handleCategoryChange}>
					<option value="all">Все категории</option>
					<option value="phones">Телефоны</option>
					<option value="laptops">Ноутбуки</option>
					<option value="tablets">Планшеты</option>
				</select>

				<select value={sortBy} onChange={handles.handleSortChange}>
					<option value="name">По названию</option>
					<option value="price">По цене</option>
				</select>

				<button onClick={handles.handleShowFilters}>
					{showFilters ? "Скрыть фильтры" : "Показать фильтры"}
				</button>
			</div>
		</div>
	);
};

export default Filters;
