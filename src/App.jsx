import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<Header />
				<HomePage />
			</div>
		</Provider>
	);
}

export default App;
