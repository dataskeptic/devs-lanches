/*
[] cart array
  [] snack
    [] interface SnackData
    [] quantity

[] add a snack into cart
*/

import { createContext, ReactNode, useContext, useState } from 'react';

import { SnackData } from '../interface/snackData';

interface Snack extends SnackData {
	quantity: number;
	subtotal: number;
}

interface OrderContextProps {
	addSnackIntoCart: (snack: SnackData) => void;
}

interface OrderProviderProps {
	children: ReactNode;
}

const OrderContext = createContext({} as OrderContextProps);

export function OrderProvider({ children }: OrderProviderProps) {
	const [cart, setCart] = useState<Snack[]>([]);

	function addSnackIntoCart(snack: SnackData) {
		const snackExistentInCart = cart.find(
			(item) => item.snack === snack.snack && item.id === snack.id,
		);

		if (snackExistentInCart) {
			const newCart = cart.map((item) => {
				if (item.id === snack.id) {
					const quantity = item.quantity + 1;
					const subtotal = item.price * quantity;
					return { ...item, quantity, subtotal };
				}
				return item;
			});

			setCart(newCart);
		} else {
			const quantity = 1;
			const subtotal = snack.price * quantity;

			const newCartSnack = { ...snack, quantity, subtotal };
			setCart((oldCart) => [...oldCart, newCartSnack]);
		}
	}

	return (
		<OrderContext.Provider value={{ addSnackIntoCart }}>
			{children}
		</OrderContext.Provider>
	);
}

export function useOrder() {
	const contextData = useContext(OrderContext);
	return contextData;
}
