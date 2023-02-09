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
			gsap.fromTo(
				'.charUp',
				{ y: -1000, opacity: 0 },
				{ y: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 2, ease: 'bounce', repeat: 0 }
			);
			gsap.fromTo(
				'.charDown',
				{ y: 1000, opacity: 0 },
				{ y: 0, opacity: 1, stagger: 0.1, delay: 0.2, duration: 2, ease: 'bounce', repeat: 0 }
			);
		}, textRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={textRef} className='text-white text-[43px] leading-[1.5] uppercase lg:text-6xl lg:leading-loose'>
			{words.map(word => (
				<div key={word}>
					{word.split('').map((char, i) => (
						<span key={i} className={`${i % 2 === 0 ? 'charUp' : 'charDown'} inline-flex`}>
							{char}
						</span>
					))}
				</div>
			))}
		</div>
	);
};
