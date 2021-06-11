import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { useSnack } from '../../../hooks/useSnack';

export function Pizzas() {
	const { pizzas } = useSnack();

	return (
		<>
			<SnackTitle>Pizzas</SnackTitle>
			<Snacks snacks={pizzas} />
		</>
	);
}
