import { useRef, useLayoutEffect, ReactNode } from 'react';

import gsap from 'gsap';
type Props = {
	children: ReactNode | ReactNode[];
};
export const Wrapper: React.FC<Props> = ({ children }) => {
	const borderEffect = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });
		const ctx = gsap.context(() => {
			tl.fromTo(
				borderEffect.current,
				{
					backgroundImage:
						'conic-gradient(from 0turn, #213, #112 50%, #213), conic-gradient(from 0turn, transparent 20%, #08f, #f03)',
				},
				{
					duration: 4,
					ease: 'linear',
					backgroundImage:
						'conic-gradient(from 1turn, #213,#112 50%,#213),conic-gradient(from 1turn, transparent 20%, #08f,#f03',
				}
			);
		}, borderEffect);
		return () => ctx.revert();
	}, []);

	return (
		<div
			style={{
				border: '1px solid transparent',
				borderImage: 'conic-gradient(from 0deg, #213, #112 50%, #213) 1',
				backgroundSize: 'calc(100% - (6px * 2)) calc(100% - (6px * 2)), cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
			}}
			ref={borderEffect}
			className='bg-black bg-opacity-80 dark:bg-opacity-50 h-1/3 w-9/12 -mt-32 px-3 relative overflow-hidden md:w-8/12 md:1/2 md:h-1/2 lg:w-9/12 lg:h-full lg:mx-auto lg:mt-0 lg:col-span-2 lg:row-span-3 flex justify-center items-center'>
			<div className='absolute inset-0 bg-cover w-full h-full scale-150' />
			{children}
		</div>
	);
};
