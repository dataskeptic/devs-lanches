import { BrowserRouter } from 'react-router-dom';
import { SnackProvider } from './contexts/SnackContext';

import { AppRoutes } from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
	return (
		<BrowserRouter>
			<SnackProvider>
				<AppRoutes />
				<GlobalStyle />
			</SnackProvider>
		</BrowserRouter>
	);
}
