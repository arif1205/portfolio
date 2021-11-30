import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	background: url(${(props) => props.bg});
	background-size: cover;
	background-position: center center;
	position: relative;
`;

export const Content = styled.div`
	text-transform: uppercase;
	position: absolute;
	left: 150px;
	bottom: 150px;
	width: clamp(300px, 50%, 800px);

	h3 {
		color: #797979;
		font-size: 16px;
		letter-spacing: 2px;
		font-weight: normal;
	}

	h1 {
		color: #05364d;
		font-size: 50px;
		font-weight: 500;
		margin: 20px 0;
	}

	h2 {
		font-weight: 300;
		color: #05364d;
		font-size: 24px;
		line-height: 29px;
	}

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 30px;
		margin: 40px 0;
	}

	li {
		background: linear-gradient(
			to right,
			#1345e6 0%,
			#ed239f 51%,
			#1345e6 100%
		);
		background-size: 200% auto;
		padding: 2px;
		transition: all 0.3s ease-in-out;

		a {
			color: #05364d;
			display: inline-block;
			font-size: 20px;
			width: 50px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			background: white;
		}

		&:hover {
			background-position: right center;
		}
	}
`;
