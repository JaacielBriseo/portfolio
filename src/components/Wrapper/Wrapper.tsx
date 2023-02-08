import { useRef, useLayoutEffect, ReactNode } from 'react';

import gsap from 'gsap';
type Props = {
	children: ReactNode | ReactNode[];
};
export const Wrapper: React.FC<Props> = ({ children }) => {
	const animatedBgRef = useRef<HTMLDivElement>(null);
	const borderEffect = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });

		tl.to(borderEffect.current, {
			duration: 3,
			ease: 'linear',
			backgroundImage:
				'conic-gradient(from 1turn, #213,#112 50%,#213),conic-gradient(from 1turn, transparent 20%, #08f,#f03',
		});
	}, []);

	return (
		<div
			style={{
				border: '1px solid transparent',
				borderImage: 'conic-gradient(from 0deg, #213, #112 50%, #213) 1',
				backgroundImage:
					'conic-gradient(from 0turn, #213, #112 50%, #213), conic-gradient(from 0turn, transparent 20%, #08f, #f03)',
				backgroundSize: 'calc(100% - (6px * 2)) calc(100% - (6px * 2)), cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
			}}
			ref={borderEffect}
			className='box bg-black bg-opacity-80 dark:bg-opacity-50 h-1/3 max-w-[330px] -mt-20 p-2 relative overflow-hidden'>
			<div ref={animatedBgRef} className='absolute inset-0 bg-cover w-full h-full scale-150' />
			{children}
		</div>
	);
};
