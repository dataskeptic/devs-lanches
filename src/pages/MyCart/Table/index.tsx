import { useEffect, useState } from 'react';
import { Empty } from '../../../components/Empty';
import { useOrder } from '../../../contexts/CartContext';

import { TableDesktop } from './TableDesktop';
import { TableMobile } from './TableMobile';

export function Table() {
	const [windowWidth, setWindowWidth] = useState(
		document.documentElement.clientWidth,
	);
	const { cart } = useOrder();

	useEffect(() => {
		function updateTableComponentBasedInWindowWidth() {
			const currentWidth = document.documentElement.clientWidth;
			setWindowWidth(currentWidth);
		}

		window.addEventListener('resize', updateTableComponentBasedInWindowWidth);

		return () => {
			window.removeEventListener(
				'resize',
				updateTableComponentBasedInWindowWidth,
			);
		};
	}, []);

	if (cart.length === 0)
		return <Empty title="Ops! Parece que você não tem pedidos, peça já!" />;

	return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
}
