import { ReactNode, useEffect, useState } from 'react';
import { NavigationContext } from './NavigationContext';

interface Props {
	children: ReactNode | ReactNode[];
}
export const NavigationProvider: React.FC<Props> = ({ children }) => {
	const [currenthPath, setCurrenthPath] = useState(window.location.pathname);
	useEffect(() => {
		const handler = () => setCurrenthPath(window.location.pathname);
		window.addEventListener('popstate', handler);

		return () => window.removeEventListener('popstate', handler);
	}, []);

	const navigate = (to: string) => {
		window.history.pushState({}, '', to);
		setCurrenthPath(to);
	};

	return <NavigationContext.Provider value={{ currenthPath, navigate }}>{children}</NavigationContext.Provider>;
};
