import { SnackTitle } from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

import { useSnack } from '../../../contexts/SnackContext';

export function Burgers() {
	const { burgers } = useSnack();

	return (
		<>
			<SnackTitle>Hambúrgueres</SnackTitle>
			<Snacks snacks={burgers} />
		</>
	);
}
