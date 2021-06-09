import { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { snackEmoji } from '../helpers/snackEmoji';

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

interface RemoveItemFromCartProps {
	id: number;
	snack: string;
}

interface OrderContextProps {
	cart: Snack[];
	addSnackIntoCart: (snack: SnackData) => void;
	updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
	removeItemFromCart: ({ id, snack }: RemoveItemFromCartProps) => void;
	confirmOrder: () => void;
}

interface OrderProviderProps {
	children: ReactNode;
}

const OrderContext = createContext({} as OrderContextProps);

export function OrderProvider({ children }: OrderProviderProps) {
	const navigate = useNavigate();
	const [cart, setCart] = useState<Snack[]>([]);

	function confirmOrder() {
		setTimeout(() => {
			setCart([]);
			navigate('/');
		}, 250);

		toast.success('☑️ Pedido realizado!');
	}

	function removeItemFromCart({ id, snack }: RemoveItemFromCartProps) {
		const newCart = cart.filter(
			(item) => !(item.snack === snack && item.id === id),
		);
		setCart(newCart);
		toast.error(`Lanche removido dos pedidos!`);
	}

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
			toast.success(
				`Outro(a) ${snackEmoji(snack.snack)} ${
					snack.name
				} adicionado aos pedidos!`,
			);
		} else {
			const quantity = 1;
			const subtotal = snack.price * quantity;

			const newCartSnack = { ...snack, quantity, subtotal };

			setCart((oldCart) => [...oldCart, newCartSnack]);
			toast.success(
				`${snackEmoji(snack.snack)} ${snack.name} adicionado aos pedidos!`,
			);
		}
	}

	return (
		<OrderContext.Provider
			value={{
				cart,
				addSnackIntoCart,
				updateCart,
				removeItemFromCart,
				confirmOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export function useOrder() {
	const contextData = useContext(OrderContext);
	return contextData;
}
