import { Routes, Route } from 'react-router-dom';

import { Menu } from '../pages/Menu';
import { Burgers } from '../pages/Menu/Burgers';
import { Drinks } from '../pages/Menu/Drinks';
import { IceCreams } from '../pages/Menu/IceCreams';
import { Pizzas } from '../pages/Menu/Pizzas';

import { MyCart } from '../pages/MyCart';

import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Menu />}>
				<Route path="/" element={<Burgers />} />
				<Route path="pizzas" element={<Pizzas />} />
				<Route path="drinks" element={<Drinks />} />
				<Route path="ice-creams" element={<IceCreams />} />
			</Route>
			<Route path="cart" element={<MyCart />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
