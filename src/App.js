import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// styles
import { GlobalStyle } from "./global.styles";
// Pages
import Home from "./Pages/Home";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
