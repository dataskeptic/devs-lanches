import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
					<ToastContainer autoClose={2000} />
					<GlobalStyle />
				</OrderProvider>
			</SnackProvider>
		</BrowserRouter>
	);
}
