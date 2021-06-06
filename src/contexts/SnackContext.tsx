import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

import { SnackData } from '../interface/snackData';
import { api } from '../services/api';

interface SnackContextProps {
	burgers: SnackData[];
	pizzas: SnackData[];
	drinks: SnackData[];
	iceCreams: SnackData[];
}

interface SnackProviderProps {
	children: ReactNode;
}

const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
	const [burgers, setBurgers] = useState<SnackData[]>([]);
	const [pizzas, setPizzas] = useState<SnackData[]>([]);
	const [drinks, setDrinks] = useState<SnackData[]>([]);
	const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const burgersRequest = api.get<SnackData[]>('/burgers');
				const pizzasRequest = api.get<SnackData[]>('/pizzas');
				const drinksRequest = api.get<SnackData[]>('/drinks');
				const iceCreamsRequest = api.get<SnackData[]>('/ice-creams');

				const requests = [
					burgersRequest,
					pizzasRequest,
					drinksRequest,
					iceCreamsRequest,
				];

				const [
					{ data: burgersResponse },
					{ data: pizzasResponse },
					{ data: drinksResponse },
					{ data: iceCreamsResponse },
				] = await Promise.all(requests);

				setBurgers(burgersResponse);
				setPizzas(pizzasResponse);
				setDrinks(drinksResponse);
				setIceCreams(iceCreamsResponse);
			} catch (err) {
				console.log(`[ERROR]: ${err}`);
			}
		})();
	}, []);

	return (
		<SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
			{children}
		</SnackContext.Provider>
	);
}

export function useSnack() {
	const contextData = useContext(SnackContext);
	return contextData;
}
