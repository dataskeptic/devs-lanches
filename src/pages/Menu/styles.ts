import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;

	display: flex;

	> section {
		flex: 1;
		width: 100%;
		height: 100vh;
		overflow-y: scroll;
		padding: 2rem 1.875rem;

		img {
			width: 10rem;
			margin-bottom: 2rem;
		}

		.snacks {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, auto));
			gap: 1.75rem;

			.snack {
				position: relative;
				background: var(--black);
				padding: 1.75rem 1.5rem;
				border-radius: 4px;

				display: flex;
				flex-direction: column;
				justify-content: space-between;

				h2 {
					margin-bottom: 0.75rem;
					font-weight: 700;
					font-size: 1.5rem;
					text-align: center;
				}

				img {
					object-fit: cover;
					width: 100%;
					height: 11.25rem;
					border-radius: 4px;
					margin-bottom: 0.375rem;
				}

				p {
					font-size: 0.875rem;
				}

				div {
					margin-top: 0.875rem;

					display: flex;
					align-items: center;
					justify-content: space-between;

					strong {
						font-size: 2rem;
						font-weight: 500;
					}

					button {
						background: var(--red);
						width: 3rem;
						height: 3rem;
						border: none;
						border-radius: 50%;

						display: flex;
						align-items: center;
						justify-content: center;

						transition: background 0.3s;

						svg {
							stroke: var(--white);
							width: 1.5rem;
							height: 1.5rem;
						}

						&:hover {
							background: ${darken(0.1, '#AA2424')};
						}
					}
				}
			}
		}
	}
`;
