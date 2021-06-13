import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';
import { Head } from '../../../components/Head';

import { useSnack } from '../../../hooks/useSnack';

export function Drinks() {
	const { drinks } = useSnack();

	return (
		<>
			<Head title="Bebidas" />
			<SnackTitle>Bebidas</SnackTitle>
			<Snacks snacks={drinks} />
		</>
	);
}
