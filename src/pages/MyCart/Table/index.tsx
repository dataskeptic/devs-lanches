import { useEffect, useState } from 'react';
import { useOrder } from '../../../contexts/OrderContext';

import { TableDesktop } from './TableDesktop';
import { TableMobile } from './TableMobile';
import { Empty } from '../Empty';

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

	if (cart.length === 0) return <Empty />;

	return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
}
