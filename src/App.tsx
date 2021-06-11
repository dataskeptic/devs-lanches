import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './contexts/CartContext';
import { SnackProvider } from './contexts/SnackContext';

import { AppRoutes } from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
	return (
		<BrowserRouter>
			<SnackProvider>
				<CartProvider>
					<AppRoutes />
					<ToastContainer autoClose={2000} />
					<GlobalStyle />
				</CartProvider>
			</SnackProvider>
		</BrowserRouter>
	);
}
