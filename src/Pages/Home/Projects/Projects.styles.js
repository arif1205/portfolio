import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 100px 40px;
	background: #fff;

	div.content {
		padding: 0 100px;
	}

	h2 {
		text-transform: uppercase;
		color: #05364d;
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 35px;
		line-height: 52px;
	}

	.projects {
		.project-card {
			position: relative;

			&:hover .img-content {
				opacity: 1;
				visibility: visible;
			}
		}

		ul {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			justify-content: space-between;
			align-items: center;
			grid-gap: 30px;

			li {
				border-radius: 5px;
				box-shadow: 1px 1px 5px 0 #777;
				overflow: hidden;

				img {
					width: 100%;
					height: 100% !important;
				}
			}
		}

		.img-content {
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 90%;
			height: 90%;
			background: #fff;
			border-radius: 5px;
			padding: 20px;

			.project-title {
				position: relative;
				width: 100%;
				height: 100%;

				.arrow {
					position: absolute;
					top: 0;
					right: 0;
					font-size: 25px;
					transform: rotate(-45deg);
				}

				h2 {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					font-size: 18px;
					color: #222;
					line-height: 28px;
				}
			}
		}
	}
`;
