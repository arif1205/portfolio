import styled from "styled-components";

export const Nav = styled.nav`
	background: #fff;
	box-shadow: 1px 0px 3px 3px #aaa;
	width: 100%;
	position: fixed;

	div.container {
		padding: 10px 150px;
	}

	img {
		width: 150px;
	}

	div.nav-flex {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 150px;
	}

	div.logo {
		align-self: center;
	}

	div.links {
		align-self: center;

		ul {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 20px;
		}
	}
`;
