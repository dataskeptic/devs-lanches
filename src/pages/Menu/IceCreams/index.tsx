import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import useSnack from '../../../contexts/SnackContext';

export function IceCreams() {
	const { iceCreams } = useSnack();

	return (
		<>
			<SnackTitle>Sorvetes</SnackTitle>
			<Snacks snacks={iceCreams} />
		</>
	);
}
