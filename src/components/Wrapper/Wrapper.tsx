// import { useRef, useLayoutEffect, ReactNode } from 'react';
// import gsap from 'gsap';
type Props = {
	children: React.ReactNode | React.ReactNode[];
};
export const Wrapper: React.FC<Props> = ({ children }) => {
	// const animatedBgRef = useRef<HTMLDivElement>(null);
	// useLayoutEffect(() => {
	// 	const tl = gsap.timeline({ repeat: -1 });
	// 	tl.fromTo(animatedBgRef.current, { x: 0, y: 0 }, { x: -100, y: -100, duration: 5, ease: 'linear' })
	// 		.to(animatedBgRef.current, {
	// 			y: 0,
	// 			x: -100,
	// 			duration: 5,
	// 			ease: 'linear',
	// 		})
	// 		.to(animatedBgRef.current, {
	// 			y: -100,
	// 			x: 0,
	// 			duration: 5,
	// 			ease: 'linear',
	// 		})
	// 		.to(animatedBgRef.current, {
	// 			x: 0,
	// 			y: 0,
	// 			duration: 5,
	// 			ease: 'linear',
	// 		});
	// }, []);

	return (
		<div className='bg-black bg-opacity-80 dark:bg-opacity-50 h-1/3 w-10/12 -mt-20 p-1 border border-gray-600 relative overflow-hidden'>
			{/* <div
				ref={animatedBgRef}
				className='absolute inset-0 bg-cover w-full h-full scale-150 bg-gradient-to-r dark:bg-wave'
			/> */}
			{children}
		</div>
	);
};
