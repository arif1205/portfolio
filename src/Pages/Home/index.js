import React, { useState, useEffect } from "react";
// compoents
import Navbar from "../../Components/Navbar";
import Banner from "./Banner";
import About from "./About";
import ReactLoading from "react-loading";
import Projects from "./Projects";
import { Load } from "../../global.styles";

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.addEventListener("load", (event) => {
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading && (
				<Load>
					<ReactLoading type='bars' color='#1345e6' />
				</Load>
			)}
			<Navbar />
			<Banner />
			<About />
			<Projects />
		</>
	);
};

export default Home;
