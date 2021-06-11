import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

export function useCart() {
	const contextData = useContext(CartContext);
	return contextData;
}
