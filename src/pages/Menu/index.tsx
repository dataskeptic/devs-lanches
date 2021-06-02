import { Outlet } from 'react-router';

import logoImg from '../../assets/logo.svg';

import { Sidebar } from '../../components/Sidebar';
import { MyOrder } from '../../components/MyOrder';

import { Container } from './styles';

export function Menu() {
	return (
		<Container>
			<Sidebar />

			<section>
				<img src={logoImg} alt="Dev Lanches" />
				<Outlet />
			</section>

			<MyOrder />
		</Container>
	);
}
