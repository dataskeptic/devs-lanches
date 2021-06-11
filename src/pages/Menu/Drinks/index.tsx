import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { useSnack } from '../../../hooks/useSnack';

export function Drinks() {
	const { drinks } = useSnack();

	return (
		<>
			<SnackTitle>Bebidas</SnackTitle>
			<Snacks snacks={drinks} />
		</>
	);
}
