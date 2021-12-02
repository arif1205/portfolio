import React from "react";
import { Container, Flex, Left, Right } from "./Footer.styles";

const Footer = () => {
	return (
		<Container>
			<Flex>
				<Left>
					<p>Copyright ©2021 All rights reserved</p>
				</Left>
				<Right>
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
				</Right>
			</Flex>
		</Container>
	);
};

export default Footer;
