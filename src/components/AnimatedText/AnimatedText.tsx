import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
interface Props {
	text: string;
}
export const AnimatedText: React.FC<Props> = ({ text }) => {
	const textRef = useRef<HTMLHeadingElement>(null);
	useLayoutEffect(() => {
		const tl = gsap.timeline({ repeat: 0, ease: 'back' });

		tl.fromTo(
			textRef.current,
			{
				opacity: 0,
				scale: 0,
			},
			{ opacity: 1, scale: 1, duration: 2 }
		);
	}, []);
	return (
		//TODO: SCALE TEXT ON HOVER
		<h1 ref={textRef} className='text-white text-5xl leading-[1.5] uppercase'>
			{text}
		</h1>
	);
};
