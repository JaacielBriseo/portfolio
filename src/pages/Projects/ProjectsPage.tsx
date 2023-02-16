import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ProjectsGrid } from '../../components/ProjectsGrid/ProjectsGrid';
import { Sidebar } from '../../components/Sidebar/Sidebar';
gsap.registerPlugin(ScrollTrigger);

export const ProjectsPage = () => {
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const bg = bgRef.current;
		const ctx = gsap.context(() => {
			gsap.to(bg, {
				backgroundPosition: `50% 0px`,
				ease: 'none',
				scrollTrigger: {
					trigger: bg,
					start: 'top +=100px',
					end: 'bottom',
					scrub: true,
					invalidateOnRefresh: true,
				},
			});
		}, bgRef);
		return () => ctx.revert();
	}, []);
	return (
		<div ref={bgRef} className='bg-day bg-no-repeat bg-cover bg-fixed dark:bg-night lg:grid lg:grid-cols-6'>
			<Sidebar className='mt-3 lg:col-span-1 max-h-screen'/>
			<ProjectsGrid />
		</div>
	);
};
