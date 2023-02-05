import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
interface Props {
	text: string;
}
export const AnimatedText: React.FC<Props> = ({ text }) => {
	const textRef = useRef<HTMLHeadingElement>(null);
	const words = text.split(' ');
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.char', { y: 0, stagger: 0.1, delay: 0.5, duration: 1, ease: 'none', repeat: 0 });
		}, textRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={textRef} className='text-white text-[43px] leading-[1.5] uppercase'>
			{words.map(word => (
				<div key={word}>
					{word.split('').map((char, i) => (
						<span key={i} className='char inline-flex translate-y-96 duration-100 hover:text-7xl '>
							{char}
						</span>
					))}
				</div>
			))}
		</div>
	);
};
