import { createContext, ReactNode, useContext, useState } from 'react';

import { SnackData } from '../interface/snackData';

interface Snack extends SnackData {
	quantity: number;
	subtotal: number;
}

interface UpdateCartProps {
	id: number;
	snack: string;
	newQuantity: number;
}

interface OrderContextProps {
	cart: Snack[];
	addSnackIntoCart: (snack: SnackData) => void;
	updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
}

interface OrderProviderProps {
	children: ReactNode;
}

const OrderContext = createContext({} as OrderContextProps);

export function OrderProvider({ children }: OrderProviderProps) {
	const [cart, setCart] = useState<Snack[]>([]);

	function updateCart({ id, snack, newQuantity }: UpdateCartProps) {
		if (newQuantity <= 0) return;

		const snackExistentInCart = cart.find(
			(item) => item.snack === snack && item.id === id,
		);

		if (!snackExistentInCart) return;

		const newCart = cart.map((item) => {
			if (
				item.snack === snackExistentInCart.snack &&
				item.id === snackExistentInCart.id
			)
				return {
					...item,
					quantity: newQuantity,
					subtotal: item.price * newQuantity,
				};

			return item;
		});

		setCart(newCart);
	}

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
		<OrderContext.Provider value={{ cart, addSnackIntoCart, updateCart }}>
			{children}
		</OrderContext.Provider>
	);
}

export function useOrder() {
	const contextData = useContext(OrderContext);
	return contextData;
}
