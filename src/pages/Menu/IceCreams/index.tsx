import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';
import { Head } from '../../../components/Head';

import { useSnack } from '../../../hooks/useSnack';

export function IceCreams() {
	const { iceCreams } = useSnack();

	return (
		<>
			<Head title="Sorvetes" />
			<SnackTitle>Sorvetes</SnackTitle>
			<Snacks snacks={iceCreams} />
		</>
	);
}
