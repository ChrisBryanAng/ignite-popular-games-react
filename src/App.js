import React from "react";
// components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Global Styles
import GlobalStyle from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Route path={["/game/:id", "/"]}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
