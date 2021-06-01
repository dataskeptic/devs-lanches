import { useEffect } from 'react';

import { api } from '../../../services/api';

import { SnackTitle } from '../../../components/SnackTitle';

export function Drinks() {
	useEffect(() => {
		async function getDrinks() {
			const { data } = await api.get('/drinks');
			console.log(data);
		}

		getDrinks();
	}, []);

	return (
		<>
			<SnackTitle>Bebidas</SnackTitle>
		</>
	);
}
