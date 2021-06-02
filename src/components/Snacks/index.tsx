import { FiPlus } from 'react-icons/fi';

import { SnackData } from '../../interface/snackData';
import { currencyFormat } from '../../helpers/currencyFormat';
import { useOrder } from '../../contexts/OrderContext';

interface SnacksProps {
	snacks: SnackData[];
}

export function Snacks({ snacks }: SnacksProps) {
	const { addSnackIntoCart } = useOrder();

	return (
		<div className="snacks">
			{snacks.map((snack) => (
				<div key={snack.id} className="snack">
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
			))}
		</div>
	);
}
