import { projects } from '../../constants/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { TypewritterCharacters } from '../TypewritterCharacters/TypewritterCharacters';
export const ProjectsGrid = () => {
	return (
		<section className='space-y-10 relative overflow-x-hidden p-10 lg:col-span-5'>
			<div className='space-y-4'>
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
