import styled, { css } from 'styled-components';

interface ContainerProps {
	isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
	background: var(--red);
	${({ isMenuOpen }) =>
		isMenuOpen
			? css`
					width: 16.3rem;
			  `
			: css`
					width: 7.75rem;
			  `};
	padding: 2rem 0;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;

	transition: width 0.3s;

	button {
		background: none;
		width: 100%;
		border: none;
	}

	nav {
		flex: 1;
		width: 100%;
		height: 100%;

		ul {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.25rem;
		}

		li {
			a {
				width: fit-content;
				position: relative;
				padding-left: 1.875rem;
				padding-right: 1.875rem;

				display: flex;
				align-items: center;
				gap: 2rem;

				svg {
					fill: var(--white);
					width: 4rem;
					height: 4rem;
					transition: fill 0.3s;
				}

				span {
					font-size: 1rem;
					font-weight: 500;
					transition: color 0.3s;
				}

				&.active {
					&::after {
						content: '';
						position: absolute;
						left: 0;
						top: 50%;
						bottom: 0;
						transform: translateY(-50%);

						background-color: var(--yellow);
						width: 5px;
						height: calc(100% + 10px);

						border-radius: 0 5px 5px 0;
					}

					svg {
						fill: var(--yellow);
					}

					span {
						color: var(--yellow);
					}
				}
			}
		}
	}
`;