import { createContext } from 'react';

interface NavigationContextValues {
	currentPath: string;
	navigate: (to: string) => void;
}
export const NavigationContext = createContext({} as NavigationContextValues)