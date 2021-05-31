import { Routes, Route } from 'react-router-dom';

import { Menu } from '../pages/Menu';
import { MyCart } from '../pages/MyCart';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Menu />} />
			<Route path="cart" element={<MyCart />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
