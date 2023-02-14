import { useRef, useLayoutEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import { phrases } from '../../constants/phrases';

export const AnimatedText = () => {
	const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
	const easesArr = useMemo(() => ['linear', 'bounce', 'elastic'], []);
	const textRef = useRef<HTMLDivElement>(null);
	const words = currentPhrase.split(' ');

	const charDirection = (index: number) => {
		return index % 2 === 0 ? 'charUp' : 'charDown';
	};
	useLayoutEffect(() => {
		const tl = gsap.timeline();
		const ctx = gsap.context(() => {
			tl.fromTo(
				'.char',
				{ y: (_, el) => (el.classList.contains('charUp') ? 1000 : -1000), opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					delay: 0.2,
					duration: 2,
					ease: easesArr[Math.floor(Math.random() * easesArr.length)],
					repeat: 0,
				}
			).to('.char', {
				rotation: 720,
				scale: 0,
				delay: 4.5,
				duration: 1,
				onComplete: () => {
					const currentIndex = phrases.indexOf(currentPhrase);
					const nextIndex = (currentIndex + 1) % phrases.length;
					const nextPhrase = phrases[nextIndex];
					setCurrentPhrase(nextPhrase);
				},
			});
		}, textRef);

		return () => ctx.revert();
	}, [currentPhrase, easesArr]);

	return (
		<div ref={textRef} className='text-white text-center uppercase '>
			{words.map(word => (
				<div key={word}>
					{word.split('').map((char, i) => (
						<span key={i} className={`${charDirection(i)} char inline-flex leading-loose font-medium text-4xl md:text-5xl md:leading-[2.25] xl:text-6xl lg:leading-[2.75] xl:leading-[2.40]`}>
							{char}
						</span>
					))}
				</div>
			))}
		</div>
	);
};
