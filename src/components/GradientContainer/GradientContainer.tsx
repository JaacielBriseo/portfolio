import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

export const GradientContainer: React.FC<Props> = ({ children }) => {
	const containerRef = useRef<null | HTMLDivElement>(null);

	useLayoutEffect(() => {
		gsap.to(containerRef.current, {
			background: 'linear-gradient(0deg, #5a0a0b, #160020, #0E0E0E)',
			duration: 7,
			repeat: -1,
			yoyo: true,
			backgroundPosition: '100% 100%',
			ease: 'none',
			onRepeat: () => {
				gsap.set(containerRef.current, { backgroundPosition: '0% 0%' });
			},
		});
	}, []);

	return (
		<div className='bg-black'>
			<div ref={containerRef} className='w-full h-screen'>
				{children}
			</div>
		</div>
	);
};
