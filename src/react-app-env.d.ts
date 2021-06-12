/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string;
			red: string;
			yellow: string;
			white: string;
			black: string;
			blackLight: string;
		};
	}
}
