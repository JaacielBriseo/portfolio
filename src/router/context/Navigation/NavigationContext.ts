import { createContext } from 'react';

interface NavigationContextValues {
	currenthPath: string;
	navigate: (to: string) => void;
}
export const NavigationContext = createContext({} as NavigationContextValues)