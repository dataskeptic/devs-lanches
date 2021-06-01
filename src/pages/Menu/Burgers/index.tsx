import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { api } from '../../../services/api';
import { SnackData } from '../../../interface/snackData';
import { currencyFormat } from '../../../helpers/currencyFormat';

import { SnackTitle } from '../../../components/SnackTitle';

export function Burgers() {
	const [burgers, setBurgers] = useState<SnackData[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await api.get('/burgers');
			setBurgers(data);
		})();
	}, []);

	return (
		<>
			<SnackTitle>Hambúrgueres</SnackTitle>
			{burgers.length !== 0 && (
				<div className="snacks">
					{burgers.map((burger) => (
						<div key={burger.id} className="snack">
							<h2>{burger.name}</h2>
							<img src={burger.image} alt={burger.name} />
							<p>{burger.description}</p>
							<div>
								<strong>{currencyFormat(burger.price)}</strong>
								<button type="button">
									<FiPlus />
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
}
