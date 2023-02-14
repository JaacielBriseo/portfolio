import gsap, { SteppedEase } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(TextPlugin);

interface Props {
	text: string;
	className?: string;
}
export const TypewritterCharacters = (props: Props) => {
	const textRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				'.cursor',
				{ autoAlpha: 0, x: 2 },
				{ autoAlpha: 1, duration: 0.9, repeat: -1, ease: SteppedEase.config(37) }
			);
			gsap.to('.text', {
				text: { value: props.text },
				duration: 1.2,
				delay: 0.6,
				ease: 'none',
			});
		}, textRef);

		return () => ctx.revert();
	}, [props]);

	return (
		<div ref={textRef} className='flex'>
			<span className={`${props.className} text `}></span>
			<span className={`${props.className} cursor`}>_</span>
		</div>
	);
};
