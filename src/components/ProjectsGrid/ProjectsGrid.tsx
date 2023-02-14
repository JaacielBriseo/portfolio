import ScrollTrigger from 'gsap/ScrollTrigger';
import { projects } from '../../constants/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { TypewritterCharacters } from '../TypewritterCharacters/TypewritterCharacters';
import { AiOutlineHome, AiOutlineWechat } from 'react-icons/ai';
import { useNavigation, useWindowSize } from '../../hooks';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
gsap.registerPlugin(ScrollTrigger);
export const ProjectsGrid = () => {
	const bgRef = useRef<HTMLElement>(null);
	const { navigate } = useNavigation();
	const { width } = useWindowSize();
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
		<section ref={bgRef} className='bg-day bg-no-repeat bg-cover bg-fixed space-y-10 relative dark:bg-night'>
			<div className='space-y-4 border border-transparent'>
				{width && width >= 1024 && (
					<div className='absolute top-1 left-24 flex items-end justify-center space-x-1'>
						<AiOutlineHome className='w-8 h-8 dark:text-white cursor-pointer' onClick={() => navigate('/')} />
						<AiOutlineWechat className='w-8 h-8 dark:text-white cursor-pointer' onClick={() => navigate('/contact')} />
						<ThemeToggler />
					</div>
				)}
				<div className='flex items-end justify-center w-9/12 mx-auto'>
					<TypewritterCharacters
						text='My projects'
						className='font-medium text-3xl tracking-wider leading-10 uppercase text-black dark:text-white'
					/>
				</div>
				<div className='flex items-center justify-center border border-[#077] w-9/12 mx-auto bg-black bg-opacity-70 dark:bg-opacity-5 p-2 md:w-8/12'>
					<h2 className='text-gray-100 font-medium tracking-wide leading-relaxed break-words'>
						"This is a showcase of the projects and challenges I have tackled. I'm a versatile Front-End Developer
						experienced in using TypeScript, React, Tailwind, GSAP, and various other front-end technologies and
						libraries such as Bootstrap, Bulma, Material UI, Axios, Redux, React Router. I also have knowledge in
						Backend development with Node, Express, MongoDB, and Firebase."
					</h2>
				</div>
			</div>
			<h3 className='text-slate-500 dark:text-white font-medium italic underline underline-offset-4 text-lg text-center mx-auto w-9/12'>
				Hover/tab on a project to see more information
			</h3>
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
