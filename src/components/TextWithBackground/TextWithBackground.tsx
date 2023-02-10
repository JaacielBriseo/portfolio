import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(TextPlugin);

interface Props {
	text: string;
}
export const TextWithBackground = (props: Props) => {
	const textRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(textRef.current, {
				y: 0,
				delay: 0.2,
				duration: 0.7,
				text: {
					value: props.text,
					delimiter: '',
				},
				ease: 'none',
			});
		}, textRef);

		return () => ctx.revert();
	}, [props]);

	return <p ref={textRef} className='font-medium text-4xl tracking-wider leading-10 uppercase text-white'></p>;
};
