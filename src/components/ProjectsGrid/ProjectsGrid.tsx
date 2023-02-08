import ScrollTrigger from 'gsap/ScrollTrigger';
import { projects } from '../../constants/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
export const ProjectsGrid = () => {
	const bgRef = useRef<HTMLElement>(null);
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
	return (
		<section
			ref={bgRef}
			style={{ backgroundPosition: '100% 0px' }}
			className='bg-day bg-no-repeat bg-cover bg-fixed dark:bg-night space-y-10'>
			<div>
				<div className='flex items-end justify-center w-9/12 mx-auto h-20'>
					<h1 className='text-tertiary font-medium tracking-widest text-center text-3xl uppercase'>My projects</h1>
				</div>
				<div className='flex items-center justify-center border w-9/12 mx-auto bg-black bg-opacity-90 h-40 p-2'>
					<h2 className='text-fourth font-medium tracking-wide text-sm'>
						"Front End Dev with a focus on React, TS, & Tailwind, but also skilled in other frameworks like Bootstrap,
						Material UI, & GSAP. Proficient in Backend development with Express, Mongo, Firebase, & Node💻."
					</h2>
				</div>
			</div>
			<h3 className='text-red-700 text-center text-sm'>Hover on a project to see more information</h3>
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
