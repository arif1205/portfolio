import React from "react";
// styles
import { Container, Content } from "./Banner.styles";
// Images
import bg from "../../../Images/banner-bg.webp";
import { Button } from "../../../global.styles";
import { Fade } from "react-awesome-reveal";

const Home = () => {
	return (
		<Container bg={bg}>
			<Fade triggerOnce>
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
			</Fade>
		</Container>
	);
};

export default Home;
