/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				richBlack: '#03071eff',
				chocolateCosmos: '#370617ff',
				rosewood: '#6a040fff',
				pennRed: '#9d0208ff',
				engineeringOrange: '#d00000ff',
				sinopia: '#dc2f02ff',
				persimmon: '#e85d04ff',
				princetonOrange: '#f48c06ff',
				orangeWeb: '#faa307ff',
				selectiveYellow: '#ffba08ff',
				Dark: '#000112',
				gray: {
					100: '#F7FAFC',
					200: '#EDF2F7',
					300: '#E2E8F0',
					400: '#CBD5E0',
					500: '#A0AEC0',
					600: '#718096',
					700: '#4A5568',
					800: '#2D3748',
					900: '#1A202C',
				},
			},
			fontFamily: {
				OpenSans: ['Open Sans', 'sans-serif'],
				Montserrat: ['Montserrat', 'sans-serif'],
				Staat: ['Staatliches', 'sans-serif'],
			},
			animations: {
				'fade-in': 'fade-in 1s ease-in-out',
				'fade-out': 'fade-out 1s ease-in-out',
			},
			backgroundImage: {
				stars: 'url(/assets/background-stars.svg)',
				sparks: 'url(/assets/sparks.svg)',
				volcanoLight: 'url(/assets/volcano-light.jpg)',
				volcanoDark: 'url(/assets/volcano-dark.jpg)',
				wave: 'url(/assets/wave-haikei.svg)',
				dessert: 'url(/assets/layered-peaks-haikei.svg)',
				day: 'url(/assets/twilight.svg)',
				night: 'url(/assets/moonlight.svg)',
				clouds: 'url(https://greensock.com/_img/codepen/clouds.png)',
			},
		},
	},
	plugins: [],
};
