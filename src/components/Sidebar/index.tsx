import { NavLink } from 'react-router-dom';

import menuImg from '../../assets/menu.svg';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg';
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg';

import { Container } from './styles';
import { useState } from 'react';

export function Sidebar() {
	const [isMenuOpen, handleIsMenuOpen] = useState(false);

	function handleToggleMenu() {
		handleIsMenuOpen((oldIsMenuOpen) => !oldIsMenuOpen);
	}

	return (
		<Container isMenuOpen={isMenuOpen}>
			<button type="button" onClick={handleToggleMenu}>
				<img src={menuImg} alt="Abrir e fechar menu" />
			</button>

			<nav>
				<ul>
					<li>
						<NavLink to="/" end>
							<BurgerIcon />
							<span>Hambúrgueres</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="pizzas">
							<PizzaIcon />
							<span>Pizzas</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="drinks">
							<SodaPopIcon />
							<span>Bebidas</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="ice-creams">
							<IceCreamIcon />
							<span>Sorvetes</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</Container>
	);
}
