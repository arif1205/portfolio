import styled from "styled-components";

export const Container = styled.footer`
	width: 100%;
	background: #021017;
	color: white;
	padding: 40px;
`;

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
export const Left = styled.div``;
export const Right = styled.div`
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 30px;
	}

	li {
		background: linear-gradient(
			to right,
			#1345e6 0%,
			#ed239f 51%,
			#1345e6 100%
		);
		background-size: 200% auto;
		padding: 4px;
		transition: all 0.3s ease-in-out;
		border-radius: 50%;

		a {
			color: #05364d;
			display: inline-block;
			font-size: 20px;
			width: 45px;
			height: 45px;
			border-radius: 50%;
			line-height: 45px;
			text-align: center;
			background: white;
		}

		&:hover {
			background-position: right center;
		}
	}
`;
