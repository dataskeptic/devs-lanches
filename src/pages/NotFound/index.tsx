import { Empty } from '../../components/Empty';

import { Container } from './styles';

export function NotFound() {
	return (
		<Container>
			<Empty title="Ops! Parece que essa página não existe..." />
		</Container>
	);
}
