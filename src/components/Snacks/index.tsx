import { FiPlus } from 'react-icons/fi';

import { SnackData } from '../../interface/snackData';
import { currencyFormat } from '../../helpers/currencyFormat';

interface SnacksProps {
	snacks: SnackData[];
}

export function Snacks({ snacks }: SnacksProps) {
	return (
		<div className="snacks">
			{snacks.map((snack) => (
				<div key={snack.id} className="snack">
					<h2>{snack.name}</h2>
					<img src={snack.image} alt={snack.name} />
					<p>{snack.description}</p>
					<div>
						<strong>{currencyFormat(snack.price)}</strong>
						<button type="button">
							<FiPlus />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
