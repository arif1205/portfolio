import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif !important;
  }
  
  a {
    text-decoration: none;
    transition: all .3s ease-in-out;
  }

  ul {
    list-style-type: none;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
	text-transform: uppercase;
	display: inline-block;
	background: linear-gradient(to right, #1345e6 0%, #ed239f 51%, #1345e6 100%);
	color: #fff;
	font-weight: 600;
	font-size: 14px;
	line-height: 50px;
	padding: 0 38px;
	outline: none !important;
	text-align: center;
	cursor: pointer;
	border-radius: 5px;
	background-size: 200% auto;
	border: none;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-position: right center;
		color: #fff;
	}
`;

export const SectionTitle = styled.h1`
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 600;
	position: relative;
	margin-bottom: 10px;
	color: #797979;
	font-size: 14px;
	line-height: 27px;
	width: max-content;
	margin: auto;
	text-align: center;
	position: relative;
	margin-bottom: 50px;

	&:before,
	&:after {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100px;
		height: 1px;
		background: #797979;
	}

	&:before {
		left: -130%;
	}

	&:after {
		right: -130%;
	}
`;

export const Load = styled.div`
	width: 100vw;
	height: 100vh;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
`;
