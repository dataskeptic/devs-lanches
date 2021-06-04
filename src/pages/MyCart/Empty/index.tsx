import manAndBurgerImg from '../../../assets/man-and-burger.svg';

import { Container, Button } from './styles';

export function Empty() {
	return (
		<Container>
			<h2>Ops... parece que você não tem pedidos, peça já!</h2>
			<Button to="/">Checar o cardápio</Button>
			<img src={manAndBurgerImg} alt="Homem com hambúrguer" />
		</Container>
	);
}
