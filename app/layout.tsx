import Script from 'next/script';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { SpeedInsights } from '@vercel/speed-insights/next';

import { ThemeProvider } from '@/components/provider';
import { MetaPixelPageView } from '@/components/meta-pixel-page-view';

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
	const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={inter.className}>
				{pixelId && (
					<>
						<Script
							id='meta-pixel'
							strategy='afterInteractive'
							dangerouslySetInnerHTML={{
								__html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
							}}
						/>
						<noscript>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								height='1'
								width='1'
								style={{ display: 'none' }}
								src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
								alt=''
							/>
						</noscript>
						<MetaPixelPageView />
					</>
				)}
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					forcedTheme='dark'
					disableTransitionOnChange>
					{children}
					<SpeedInsights />
				</ThemeProvider>
			</body>
		</html>
	);
}
