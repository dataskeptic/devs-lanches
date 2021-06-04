import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 58.75rem;
	padding: 2rem;
	margin: 0 auto;

	header {
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
		}
	}
`;
