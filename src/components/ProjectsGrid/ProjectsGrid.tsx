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
			className='grid grid-cols-1 space-y-20 p-5 sm:grid-cols-2 md:grid-cols-3 bg-day bg-no-repeat bg-cover bg-fixed dark:bg-night md:space-y-0 md:gap-10'>
			{projects.map(project => (
				<ProjectCard project={project} key={project.title} />
			))}
		</section>
	);
};
