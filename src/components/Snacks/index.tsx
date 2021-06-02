import { FiPlus } from 'react-icons/fi';

import { SnackData } from '../../interface/snackData';
import { currencyFormat } from '../../helpers/currencyFormat';
import { useOrder } from '../../contexts/OrderContext';

import { Container } from './styles';

interface SnacksProps {
	snacks: SnackData[];
}

export function Snacks({ snacks }: SnacksProps) {
	const { cart, addSnackIntoCart } = useOrder();

	return (
		<Container>
			{snacks.map((snack) => {
				const snackExistent = cart.find(
					(item) => item.id === snack.id && item.snack === snack.snack,
				);

				return (
					<div key={snack.id} className="snack">
						{snackExistent && <span>{snackExistent.quantity}</span>}
						<h2>{snack.name}</h2>
						<img src={snack.image} alt={snack.name} />
						<p>{snack.description}</p>
						<div>
							<strong>{currencyFormat(snack.price)}</strong>
							<button type="button" onClick={() => addSnackIntoCart(snack)}>
								<FiPlus />
							</button>
						</div>
					</div>
				);
			})}
		</Container>
	);
}
