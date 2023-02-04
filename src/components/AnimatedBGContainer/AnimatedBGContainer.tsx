import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
export const AnimatedBGContainer: React.FC<Props> = ({ children }) => {
	const divRef = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		const el = divRef.current;
		gsap.to(el, { backgroundPosition: '100% 0', ease: 'none', repeat: -1, yoyo: true, duration: 10 });
	}, []);
	return (
		<div
			ref={divRef}
			style={{ backgroundImage: 'url(/assets/background-stars.svg)' }}
			className='w-full h-full flex flex-col items-center justify-center'>
			{children}
		</div>
	);
};
