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
