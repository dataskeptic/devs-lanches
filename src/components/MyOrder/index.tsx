import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import { useOrder } from '../../contexts/OrderContext';

import { Container } from './styles';

export function MyOrder() {
	const { cart } = useOrder();

	return (
		<Container to="cart">
			<span>Meu Pedido</span>
			<CartIcon />
			{cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
		</Container>
	);
}
