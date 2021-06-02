import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

import { Container } from './styles';

export function MyOrder() {
	return (
		<Container to="cart">
			<span>Meu Pedido</span>
			<CartIcon />
		</Container>
	);
}
