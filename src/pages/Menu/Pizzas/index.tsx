import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { useSnack } from '../../../hooks/useSnack';
import { Head } from '../../../components/Head';

export function Pizzas() {
	const { pizzas } = useSnack();

	return (
		<>
			<Head title="Pizzas" />
			<SnackTitle>Pizzas</SnackTitle>
			<Snacks snacks={pizzas} />
		</>
	);
}
