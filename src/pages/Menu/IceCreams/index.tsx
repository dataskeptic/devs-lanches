import { useEffect } from 'react';

import { api } from '../../../services/api';

import { SnackTitle } from '../../../components/SnackTitle';

export function IceCreams() {
	useEffect(() => {
		async function getIceCreams() {
			const { data } = await api.get('/ice-creams');
			console.log(data);
		}

		getIceCreams();
	}, []);

	return (
		<>
			<SnackTitle>Sorvetes</SnackTitle>
		</>
	);
}
