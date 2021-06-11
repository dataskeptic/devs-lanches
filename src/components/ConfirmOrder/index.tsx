import { useOrder } from '../../contexts/CartContext';

import { currencyFormat } from '../../helpers/currencyFormat';
import { Container } from './styles';

export function ConfirmOrder() {
	const { cart, confirmOrder } = useOrder();

	const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

	return (
		<Container>
			<button type="button" onClick={() => confirmOrder()}>
				Finalizar pedido
			</button>
			<span>
				Total<strong>{currencyFormat(totalAmount)}</strong>
			</span>
		</Container>
	);
}
