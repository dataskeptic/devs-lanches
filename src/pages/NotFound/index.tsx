import { Empty } from '../../components/Empty';
import { Head } from '../../components/Head';

import { Container } from './styles';

export function NotFound() {
	return (
		<Container>
			<Head title="Página não encontrada" />
			<Empty title="Ops! Parece que essa página não existe..." />
		</Container>
	);
}
