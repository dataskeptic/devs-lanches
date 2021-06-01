import { useEffect } from 'react';

import { api } from '../../../services/api';

import { SnackTitle } from '../../../components/SnackTitle';

export function Pizzas() {
	useEffect(() => {
		async function getPizzas() {
			const { data } = await api.get('/pizzas');
			console.log(data);
		}

		getPizzas();
	}, []);

	return (
		<>
			<SnackTitle>Pizzas</SnackTitle>
		</>
	);
}
