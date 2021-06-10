import manAndBurgerImg from '../../assets/man-and-burger.svg';

import { Container, Button } from './styles';

interface EmptyProps {
	title: string;
}

export function Empty({ title }: EmptyProps) {
	return (
		<Container>
			<h2>{title}</h2>
			<Button to="/">Checar o cardápio</Button>
			<img src={manAndBurgerImg} alt="Homem com hambúrguer" />
		</Container>
	);
}
