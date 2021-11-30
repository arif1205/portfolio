import React from "react";
import { Button, SectionTitle } from "../../../global.styles";
import { Container } from "./About.styles";
import juniorDeveloper from "../../../junior-web-developer.pdf";
import { Fade } from "react-awesome-reveal";

const About = () => {
	return (
		<Container>
			<Fade cascade triggerOnce>
				<SectionTitle>About me</SectionTitle>
				<div className='content'>
					<h2 className='tag-line'>
						Mern stack web <br /> developer
					</h2>
					<p>
						Hi there, I am a Front-end Developer with more than one year of non
						professional experience. I have worked with lots of modern
						technologies and Frameworks/Libraries in Front-End Development.
						Programming and developing is my passion. I built myself by self
						learning. I have done several project in my relevant field. You can
						watch them in projects section.
					</p>
					<p>
						I am studing in Computer Science and Engineering at Shahjalal
						University of Science and Technology, Bangladesh. It is one of the
						leading university of Bangladesh.
					</p>
					<p>
						<strong>Want to learn more about me?</strong>
					</p>
					<a href={juniorDeveloper} download='imdariful71'>
						<Button>Download Resume</Button>
					</a>
				</div>
			</Fade>
		</Container>
	);
};

export default About;
