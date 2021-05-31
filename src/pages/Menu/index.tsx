import { Outlet } from 'react-router';

import { Sidebar } from '../../components/Sidebar';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

export function Menu() {
	return (
		<Container>
			<Sidebar />

			<section>
				<img src={logoImg} alt="Dev Lanches" />
				<Outlet />
			</section>
		</Container>
	);
}
