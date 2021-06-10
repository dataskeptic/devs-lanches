import styled from 'styled-components';

export const Container = styled.header`
	margin-bottom: 4rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 8rem;
	}

	> div {
		background: none;
		border: none;

		display: flex;
		align-items: center;
		gap: 0.5rem;

		div {
			text-align: right;

			h3 {
				margin-bottom: 0.125rem;
				font-weight: 500;
				color: var(--white);
			}

			span {
				color: var(--yellow);

				strong {
					font-weight: 500;
					font-size: 1.25rem;
				}
			}
		}

		svg {
			flex-shrink: 0;
			fill: var(--white);
			width: 2.875rem;
			height: 2.875rem;
		}

		@media (max-width: 720px) {
			div {
				h3 {
					font-size: 1rem;
				}
			}

			svg {
				width: 2rem;
				height: 2rem;
			}
		}

		@media (max-width: 310px) {
			svg {
				display: none;
			}
		}
	}
`;
