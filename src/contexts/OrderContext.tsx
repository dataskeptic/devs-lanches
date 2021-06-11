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

interface HandleSnackCart {
	id: number;
	snack: string;
	quantity: number;
}

interface CartContextProps {
	cart: Snack[];
	addSnackIntoCart: (snack: SnackData) => void;
	updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
	removeItemFromCart: ({ id, snack }: RemoveItemFromCartProps) => void;
	confirmOrder: () => void;
	handleProductIncrement: ({ id, snack, quantity }: HandleSnackCart) => void;
	handleProductDecrement: ({ id, snack, quantity }: HandleSnackCart) => void;
	handleRemoveProduct: ({ id, snack }: HandleSnackCart) => void;
}

interface CartProviderProps {
	children: ReactNode;
}

const localStorageItem = '@DevsLanches:cart';

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
	const navigate = useNavigate();
	const [cart, setCart] = useState<Snack[]>(() => {
		let cartInLocalStorage = localStorage.getItem(localStorageItem);
		if (cartInLocalStorage) return JSON.parse(cartInLocalStorage);
		return [];
	});

	function showSuccessMessage(message: string) {
		toast.success(message);
	}

	function showErrorMessage(message: string) {
		toast.error(message);
	}

	function manageLocalStorage(items: Snack[]) {
		const itemsToLocalStorage = JSON.stringify(items);
		localStorage.setItem(localStorageItem, itemsToLocalStorage);
	}

	function setNewCartIntoCartAndLocalStorage(items: Snack[]) {
		setCart(items);
		manageLocalStorage(items);
	}

	function confirmOrder() {
		setTimeout(() => {
			setNewCartIntoCartAndLocalStorage([]);
			navigate('/');
		}, 250);
		showSuccessMessage('☑️ Pedido realizado!');
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

			setNewCartIntoCartAndLocalStorage(newCart);
			showSuccessMessage(
				`Outro(a) ${snackEmoji(snack.snack)} ${
					snack.name
				} adicionado aos pedidos!`,
			);
			return;
		}

		const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
		const newCart = [...cart, newSnack];

		setNewCartIntoCartAndLocalStorage(newCart);
		showSuccessMessage(
			`${snackEmoji(snack.snack)} ${snack.name} adicionado aos pedidos!`,
		);
	}

	function removeItemFromCart({ id, snack }: RemoveItemFromCartProps) {
		const newCart = cart.filter(
			(item) => !(item.snack === snack && item.id === id),
		);

		setNewCartIntoCartAndLocalStorage(newCart);
		showErrorMessage(`Lanche removido dos pedidos!`);
	}

	function updateCart({ id, snack, newQuantity }: UpdateCartProps) {
		if (newQuantity <= 0) return;

		const snackExistentInCart = cart.find(
			(item) => item.snack === snack && item.id === id,
		);

		if (!snackExistentInCart) return;

		const { snack: snackExistent, id: snackIdExistent } = snackExistentInCart;

		const newCart = cart.map((item) => {
			if (item.snack === snackExistent && item.id === snackIdExistent)
				return {
					...item,
					quantity: newQuantity,
					subtotal: item.price * newQuantity,
				};
			return item;
		});

		setNewCartIntoCartAndLocalStorage(newCart);
	}

	function handleProductIncrement({ id, snack, quantity }: HandleSnackCart) {
		updateCart({ id, snack, newQuantity: quantity + 1 });
	}

	function handleProductDecrement({ id, snack, quantity }: HandleSnackCart) {
		updateCart({ id, snack, newQuantity: quantity - 1 });
	}

	function handleRemoveProduct({ id, snack }: HandleSnackCart) {
		removeItemFromCart({ id, snack });
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addSnackIntoCart,
				updateCart,
				removeItemFromCart,
				confirmOrder,
				handleProductIncrement,
				handleProductDecrement,
				handleRemoveProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useOrder() {
	const contextData = useContext(CartContext);
	return contextData;
}
