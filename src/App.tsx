import { BrowserRouter } from 'react-router-dom';
import { OrderProvider } from './contexts/OrderContext';
import { SnackProvider } from './contexts/SnackContext';

import { AppRoutes } from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
	return (
		<BrowserRouter>
			<SnackProvider>
				<OrderProvider>
					<AppRoutes />
					<GlobalStyle />
				</OrderProvider>
			</SnackProvider>
		</BrowserRouter>
	);
}
