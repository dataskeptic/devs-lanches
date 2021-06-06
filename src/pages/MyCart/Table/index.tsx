import { FaTrashAlt } from 'react-icons/fa';

import plusImg from '../../../assets/circle-plus.svg';
import minusImg from '../../../assets/circle-minus.svg';

import { useOrder } from '../../../contexts/OrderContext';
import { currencyFormat } from '../../../helpers/currencyFormat';

import { Empty } from '../Empty';

import { Container, Footer } from './styles';

interface Snack {
	id: number;
	snack: string;
	quantity: number;
}

export function Table() {
	const { cart, updateCart, removeItemFromCart, confirmOrder } = useOrder();

	if (cart.length === 0) return <Empty />;

	function handleConfirmOrder() {
		confirmOrder();
	}

	function handleProductIncrement({ id, snack, quantity }: Snack) {
		updateCart({ id, snack, newQuantity: quantity + 1 });
	}

	function handleProductDecrement({ id, snack, quantity }: Snack) {
		updateCart({ id, snack, newQuantity: quantity - 1 });
	}

	function handleRemoveProduct({ id, snack }: Snack) {
		removeItemFromCart({ id, snack });
	}

	const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Lanche</th>
						<th>Qtd</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item) => (
						<tr key={`${item.snack}-${item.id}`}>
							<td>
								<img src={item.image} alt={item.name} />
							</td>
							<td>
								<h4>{item.name}</h4>
								<span>{currencyFormat(item.price)}</span>
							</td>
							<td>
								<div>
									<button
										type="button"
										onClick={() => handleProductDecrement(item)}
									>
										<img src={minusImg} alt="Adicionar quantidade" />
									</button>
									<span>{`${item.quantity}`.padStart(2, '0')}</span>
									<button
										type="button"
										onClick={() => handleProductIncrement(item)}
									>
										<img src={plusImg} alt="Diminuir quantidade" />
									</button>
								</div>
							</td>
							<td>
								<h5>{currencyFormat(item.subtotal)}</h5>
							</td>
							<td>
								<button type="button" onClick={() => handleRemoveProduct(item)}>
									<FaTrashAlt />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Footer>
				<button type="button" onClick={() => handleConfirmOrder()}>
					Finalizar pedido
				</button>
				<span>
					Total<strong>{currencyFormat(totalAmount)}</strong>
				</span>
			</Footer>
		</Container>
	);
}
