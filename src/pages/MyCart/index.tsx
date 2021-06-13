import { OrderHeader } from '../../components/OrderHeader';
import { Table } from './Table';
import { Head } from '../../components/Head';

import { Container } from './styles';

export function MyCart() {
	return (
		<Container>
			<Head title="Carrinho" />
			<OrderHeader />
			<Table />
		</Container>
	);
}
