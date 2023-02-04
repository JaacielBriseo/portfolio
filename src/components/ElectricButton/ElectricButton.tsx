import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const ElectricButton = () => {
	const sparks = useRef<HTMLButtonElement>(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline({ repeat: -1, yoyo: true });
		tl.to(sparks.current, {
			duration: 4,
			rotation: 270,
			scale:2
		});
	}, []);
	return (
		<button ref={sparks} className='flex flex-col items-center justify-center bg-sparks mx-auto w-7/12 h-16'>
			<p className='text-white'>Hola</p>
		</button>
	);
};
