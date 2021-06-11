import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

import { useOrder } from '../../contexts/CartContext';

import { Container } from './styles';

export function OrderHeader() {
	const { cart } = useOrder();

	return (
		<Container>
			<Link to="/">
				<img src={logoImg} alt="Dev Lanches" />
			</Link>
			<div>
				<div>
					<h3>Meus pedidos</h3>
					<span>
						<strong>{`${cart.length}`.padStart(2, '0')}</strong> lanche
						{cart.length !== 1 && 's'}
					</span>
				</div>
				<CartIcon />
			</div>
		</Container>
	);
}
