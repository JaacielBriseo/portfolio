import { ReactNode, useEffect, useState } from 'react';
import { NavigationContext } from './NavigationContext';

interface Props {
	children: ReactNode | ReactNode[];
}
export const NavigationProvider: React.FC<Props> = ({ children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	useEffect(() => {
		const handler = () => setCurrentPath(window.location.pathname);
		window.addEventListener('popstate', handler);

		return () => window.removeEventListener('popstate', handler);
	}, []);

	const navigate = (to: string) => {
		window.history.pushState({}, '', to);
		setCurrentPath(to);
	};

	return <NavigationContext.Provider value={{ currentPath, navigate }}>{children}</NavigationContext.Provider>;
};
