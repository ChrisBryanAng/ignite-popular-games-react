import React from "react";
// components and pages
import Home from "./pages/Home";
// Global Styles
import GlobalStyle from "./components/GlobalStyles";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Home />
		</div>
	);
}

export default App;
