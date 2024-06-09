import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Jaaciel's Portfolio",
	description: "Jaaciel's Portfolio",
	icons: [
		{
			url: '/favicon.ico',
			sizes: '20x20',
		},
	],
	authors: [{ name: 'Jaaciel Briseño', url: 'https://jaacielb.co/' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					forcedTheme='dark'
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
