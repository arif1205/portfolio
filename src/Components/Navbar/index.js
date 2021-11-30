import React from "react";
// styles
import { Nav } from "./Navbar.styles";
// Images
import logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Nav>
			<div className='container'>
				<div className='nav-flex'>
					<div className='logo'>
						<img src={logo} alt='Logo' />
					</div>
					<div className='links'>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/'>About</Link>
							</li>
							<li>
								<Link to='/'>Projects</Link>
							</li>
							<li>
								<Link to='/'>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;
