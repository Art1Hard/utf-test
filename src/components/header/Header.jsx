import useHeader from "./hooks/useHeader";

function Header() {
	const { user } = useHeader();

	return (
		<header className="header">
			<h1>🛒 Интернет-магазин</h1>
			<div className="user-info">
				{user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
			</div>
		</header>
	);
}

export default Header;
