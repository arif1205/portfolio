import React from "react";
// compoents
import Navbar from "../../Components/Navbar";
// styles
import { Container, Content } from "./Home.styles";
// Images
import bg from "../../Images/banner-bg.webp";
import { Button } from "../../global.styles";

const Home = () => {
	return (
		<Container bg={bg}>
			<Navbar />
			<Content>
				<h3>hey there!</h3>
				<h1>I am Md. Ariful Islam</h1>
				<h2>mern stack web developer</h2>
				<div className='social'>
					<ul>
						<li>
							<a
								href='https://www.linkedin.com/in/md-ariful-islam-886581208/'
								target='_blank'
								rel='noreferrer'>
								<i class='fab fa-linkedin-in'></i>
							</a>
						</li>
						<li>
							<a
								href='https://web.facebook.com/achillesarif1205/'
								target='_blank'
								rel='noreferrer'>
								<i class='fab fa-facebook-f'></i>
							</a>
						</li>
						<li>
							<a
								href='https://github.com/arif1205'
								target='_blank'
								rel='noreferrer'>
								<i class='fab fa-github'></i>
							</a>
						</li>
					</ul>
				</div>
				<Button>see my work</Button>
			</Content>
		</Container>
	);
};

export default Home;
