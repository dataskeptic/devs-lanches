import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface ThemeProps {
	children: ReactNode;
}

const theme: DefaultTheme = {
	colors: {
		background: '#121414',
		red: '#AA2424',
		yellow: '#FECA57',
		white: '#F0F0F0',
		black: '#2D2D2D',
		blackLight: '#565656',
	},
};

export function Theme({ children }: ThemeProps) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
