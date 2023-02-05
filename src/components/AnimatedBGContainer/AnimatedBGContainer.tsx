import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
export const AnimatedBGContainer: React.FC<Props> = ({ children }) => {
	const primaryDiv = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		const el = primaryDiv.current;
		gsap.to(el, { backgroundPosition: '100% 0', ease: 'none', repeat: -1, yoyo: true, duration: 20 });
	}, []);
	return (
		<div
			ref={primaryDiv}
			className='w-full h-full flex flex-col items-center justify-center bg-day bg-fixed bg-cover bg-top dark:bg-night relative'>
			{children}
		</div>
	);
};
