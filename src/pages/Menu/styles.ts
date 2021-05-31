import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;

	display: flex;

	> section {
		padding: 2rem 1.875rem;

		img {
			width: 10rem;
			margin-bottom: 2rem;
		}
	}
`;
