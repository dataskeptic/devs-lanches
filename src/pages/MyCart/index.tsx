import { OrderHeader } from '../../components/OrderHeader';
import { Table } from './Table';

import { Container } from './styles';

export function MyCart() {
	return (
		<Container>
			<OrderHeader />
			<Table />
		</Container>
	);
}
