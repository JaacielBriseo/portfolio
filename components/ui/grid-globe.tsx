'use client';

import dynamic from 'next/dynamic';

const World = dynamic(() => import('./globe').then(m => m.World), {
	ssr: false,
});

const globeConfig = {
	pointSize: 4,
	globeColor: '#062056',
	showAtmosphere: true,
	atmosphereColor: '#FFFFFF',
	atmosphereAltitude: 0.1,
	emissive: '#062056',
	emissiveIntensity: 0.1,
	shininess: 0.9,
	polygonColor: 'rgba(255,255,255,0.7)',
	ambientLight: '#38bdf8',
	directionalLeftLight: '#ffffff',
	directionalTopLight: '#ffffff',
	pointLight: '#ffffff',
	arcTime: 1000,
	arcLength: 0.9,
	rings: 1,
	maxRings: 3,
	initialPosition: { lat: 29.1026, lng: -110.97732 },
	autoRotate: true,
	autoRotateSpeed: 0.5,
};
const colors = ['#06b6d4', '#3b82f6', '#6366f1'];
const sampleArcs = [
	{
		order: 1,
		startLat: -19.885592,
		startLng: -43.951191,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 1,
		startLat: 28.6139,
		startLng: 77.209,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 1,
		startLat: -19.885592,
		startLng: -43.951191,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 2,
		startLat: 1.3521,
		startLng: 103.8198,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 2,
		startLat: 51.5072,
		startLng: -0.1276,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 2,
		startLat: -15.785493,
		startLng: -47.909029,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 3,
		startLat: -33.8688,
		startLng: 151.2093,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 3,
		startLat: 21.3099,
		startLng: -157.8581,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 3,
		startLat: -6.2088,
		startLng: 106.8456,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 4,
		startLat: 11.986597,
		startLng: 8.571831,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 4,
		startLat: -34.6037,
		startLng: -58.3816,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 4,
		startLat: 51.5072,
		startLng: -0.1276,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 5,
		startLat: 14.5995,
		startLng: 120.9842,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 5,
		startLat: 1.3521,
		startLng: 103.8198,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 5,
		startLat: 34.0522,
		startLng: -118.2437,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 6,
		startLat: -15.432563,
		startLng: 28.315853,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 6,
		startLat: 37.5665,
		startLng: 126.978,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 6,
		startLat: 22.3193,
		startLng: 114.1694,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 7,
		startLat: -19.885592,
		startLng: -43.951191,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 7,
		startLat: 48.8566,
		startLng: -2.3522,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 7,
		startLat: 52.52,
		startLng: 13.405,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 8,
		startLat: -8.833221,
		startLng: 13.264837,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 8,
		startLat: 49.2827,
		startLng: -123.1207,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 8,
		startLat: 1.3521,
		startLng: 103.8198,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 9,
		startLat: 51.5072,
		startLng: -0.1276,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 9,
		startLat: 22.3193,
		startLng: 114.1694,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 9,
		startLat: 1.3521,
		startLng: 103.8198,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 10,
		startLat: -22.9068,
		startLng: -43.1729,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.4,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 10,
		startLat: 34.0522,
		startLng: -118.2437,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 10,
		startLat: -6.2088,
		startLng: 106.8456,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 11,
		startLat: 41.9028,
		startLng: 12.4964,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 11,
		startLat: -6.2088,
		startLng: 106.8456,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 11,
		startLat: 22.3193,
		startLng: 114.1694,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 12,
		startLat: 34.0522,
		startLng: -118.2437,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 12,
		startLat: 35.6762,
		startLng: 139.6503,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.2,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 12,
		startLat: 22.3193,
		startLng: 114.1694,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 13,
		startLat: 52.52,
		startLng: 13.405,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 13,
		startLat: 11.986597,
		startLng: 8.571831,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 13,
		startLat: -22.9068,
		startLng: -43.1729,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.1,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
	{
		order: 14,
		startLat: -33.936138,
		startLng: 18.436529,
		endLat: 29.1026,
		endLng: -110.97732,
		arcAlt: 0.3,
		color: colors[Math.floor(Math.random() * (colors.length - 1))],
	},
];
const GridGlobe = () => {
	return (
		<div className='flex items-center justify-center absolute inset-x-0 size-full md:right-0'>
			<div className='max-w-7xl mx-auto w-full relative overflow-hidden size-full'>
				<div className='absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none z-40' />
				<div className='absolute -top-5 md:top-0 w-full h-72 md:h-full z-50 md:right-0 md:w-fit lg:w-full'>
					<World
						data={sampleArcs}
						globeConfig={globeConfig}
					/>
				</div>
			</div>
		</div>
	);
};
export default GridGlobe;
