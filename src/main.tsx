import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from './contexts';
import { NavigationProvider } from './router';
import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<NavigationProvider>
				<App />
			</NavigationProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);
