import React from "react";
import { SectionTitle } from "../../../global.styles";
import { Container } from "./Projects.styles";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
	return (
		<Container>
			<Fade triggerOnce>
				<SectionTitle>Portfolio</SectionTitle>
				<div className='content'>
					<h2 className='tag-line'>
						Check my Recent <br /> Projects
					</h2>
				</div>
			</Fade>
		</Container>
	);
};

export default Projects;
