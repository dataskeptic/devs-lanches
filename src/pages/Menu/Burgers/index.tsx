import { useEffect } from 'react';

import { api } from '../../../services/api';

import { SnackTitle } from '../../../components/SnackTitle';

export function Burgers() {
	useEffect(() => {
		async function getBurgers() {
			const { data } = await api.get('/burgers');
			console.log(data);
		}

		getBurgers();
	}, []);

	return (
		<>
			<SnackTitle>Hambúrgueres</SnackTitle>
		</>
	);
}
