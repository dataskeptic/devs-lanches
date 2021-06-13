import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';
import { Head } from '../../../components/Head';

import { useSnack } from '../../../hooks/useSnack';

export function Burgers() {
	const { burgers } = useSnack();

	return (
		<>
			<Head title="Hambúrgueres" />
			<SnackTitle>Hambúrgueres</SnackTitle>
			<Snacks snacks={burgers} />
		</>
	);
}
