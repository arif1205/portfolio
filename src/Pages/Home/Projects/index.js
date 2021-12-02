import React from "react";
import { SectionTitle } from "../../../global.styles";
import { Container } from "./Projects.styles";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import xrish from "../../../Images/xrish.PNG";
import travelata from "../../../Images/travelata.PNG";
import educal from "../../../Images/educal.PNG";

const Projects = () => {
	return (
		<Container>
			<Fade triggerOnce>
				<SectionTitle>Portfolio</SectionTitle>
				<div className='content'>
					<h2 className='tag-line'>
						Check my Recent <br /> Projects
					</h2>
					<div className='projects'>
						<ul>
							<li>
								<Link to='/projects/travelata'>
									<div className='project-card'>
										<div className='img'>
											<img src={travelata} alt='travelata' />
										</div>
										<div className='img-content'>
											<div className='project-title'>
												<div className='arrow'>
													<i className='fas fa-arrow-right'></i>
												</div>
												<h2>Travelata - Travel Agency</h2>
											</div>
										</div>
									</div>
								</Link>
							</li>
							<li>
								<Link to='/projects/educal'>
									<div className='project-card'>
										<div className='img'>
											<img src={educal} alt='educal' />
										</div>
										<div className='img-content'>
											<div className='project-title'>
												<div className='arrow'>
													<i className='fas fa-arrow-right'></i>
												</div>
												<h2>Educal - Find the Best Tutor</h2>
											</div>
										</div>
									</div>
								</Link>
							</li>
							<li>
								<Link to='/projects/xrish'>
									<div className='project-card'>
										<div className='img'>
											<img src={xrish} alt='xrish' />
										</div>
										<div className='img-content'>
											<div className='project-title'>
												<div className='arrow'>
													<i className='fas fa-arrow-right'></i>
												</div>
												<h2>XRish - Authentic Watch</h2>
											</div>
										</div>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</Fade>
		</Container>
	);
};

export default Projects;
