import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	place-items: center;

	svg {
		position: relative;

		width: 150px;
		height: 150px;

		animation: rotate 2s linear infinite;

		@keyframes rotate {
			0% {
				transform: rotate(0);
			}
			100% {
				transform: rotate(360deg);
			}
		}

		circle {
			fill: none;
			width: 100%;
			height: 100%;

			stroke: var(--yellow);
			stroke-width: 10;
			stroke-linecap: round;
			stroke-dasharray: 440;
			stroke-dashoffset: 440;

			transform: translate(5px, 5px);

			animation: animate 4s linear infinite;

			@keyframes animate {
				0%,
				100% {
					stroke-dashoffset: 440;
				}
				50% {
					stroke-dashoffset: 0;
				}
				50.1% {
					stroke-dashoffset: 880;
				}
			}
		}
	}
`;
