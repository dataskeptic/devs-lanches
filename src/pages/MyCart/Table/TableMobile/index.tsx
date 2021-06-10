import plusImg from '../../../../assets/circle-plus.svg';
import minusImg from '../../../../assets/circle-minus.svg';

import { Container } from './styles';
import { FaTrashAlt } from 'react-icons/fa';
import { useOrder } from '../../../../contexts/OrderContext';
import { currencyFormat } from '../../../../helpers/currencyFormat';
import { ConfirmOrder } from '../../../../components/ConfirmOrder';

export function TableMobile() {
	const {
		cart,
		handleProductIncrement,
		handleProductDecrement,
		handleRemoveProduct,
	} = useOrder();

	return (
		<Container>
			{cart.map((item) => (
				<div key={item.id} className="order-item">
					<div>
						<img src={item.image} alt={item.name} />
					</div>
					<div>
						<h4>{item.name}</h4>
						<span>{currencyFormat(item.price)}</span>
						<div>
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
							<button type="button" onClick={() => handleRemoveProduct(item)}>
								<FaTrashAlt />
							</button>
						</div>
						<h5>
							<span>Subtotal</span> {currencyFormat(item.price)}
						</h5>
					</div>
				</div>
			))}
			<ConfirmOrder />
		</Container>
	);
}
