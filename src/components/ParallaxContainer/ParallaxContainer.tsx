import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

export const ParallaxContainer: React.FC<Props> = ({ children }) => {
	const parallaxRef = useRef<null | HTMLDivElement>(null);
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		gsap.fromTo(
			parallaxRef.current,
			{ y: -120,ease:'bounce' },
			{
				y: 0,
				scrollTrigger: {
					trigger: parallaxRef.current,
					start: 'top bottom',
					end: 'bottom top',
				},
			}
		);
	}, []);

	return (
		<div ref={parallaxRef} className={'bg-volcanoLight bg-center bg-cover dark:bg-volcanoDark'}>
			<div className='w-full h-screen'>{children}</div>
		</div>
	);
};
