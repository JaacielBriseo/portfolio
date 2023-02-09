import ScrollTrigger from 'gsap/ScrollTrigger';
import { projects } from '../../constants/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import gsap from 'gsap';
import { useRef, useEffect, useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
export const ProjectsGrid = () => {
	const bgRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		const bg = bgRef.current;
		gsap.to(bg, {
			backgroundPosition: `50% 0px`,
			ease: 'none',
			scrollTrigger: {
				trigger: bg,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				invalidateOnRefresh: true,
			},
		});
	}, []);
	useLayoutEffect(() => {
		const title = titleRef.current;
		gsap.fromTo(
			title,
			{ scaleY: 0 },
			{
				scaleY: 1,
				duration: 0.5,
				ease: 'linear',
				delay: 0.5,
			}
		);
	}, []);
	return (
		<section
			ref={bgRef}
			style={{ backgroundPosition: '100% 0px' }}
			className='bg-day bg-no-repeat bg-cover bg-fixed dark:bg-night space-y-10'>
			<div>
				<div className='flex items-end justify-center w-9/12 mx-auto h-20'>
					<h1 ref={titleRef} className='text-richBlack dark:text-persimmon font-normal tracking-widest text-center text-3xl uppercase'>
						My projects
					</h1>
				</div>
				<div className='flex items-center justify-center border w-11/12 mx-auto bg-black bg-opacity-90 p-2'>
					<h2 className='text-orangeWeb dark:text-gray-400 font-medium tracking-wide leading-relaxed break-words'>
						"Front End Dev with a focus on React, TS, & Tailwind, but also skilled in other frameworks like Bootstrap,
						Material UI, & GSAP. Proficient in Backend development with Express, Mongo, Firebase, & Node💻."
					</h2>
				</div>
			</div>
			<h3 className='text-engineeringOrange text-center mx-auto w-9/12'>Hover/tab on a project to see more information</h3>
			<div className='grid grid-cols-1 space-y-20 p-5 md:grid-cols-2 md:space-y-0 md:gap-10'>
				{projects.map((project, index) => (
					<ProjectCard
						project={project}
						key={project.title}
						flipDirection={Math.floor(index % 2) === 0 ? 'right' : 'left'}
					/>
				))}
			</div>
		</section>
	);
};
