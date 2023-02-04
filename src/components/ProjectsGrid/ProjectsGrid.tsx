import { projects } from '../../constants/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectTitle } from '../ProjectCard/ProjectTitle';
import { ProjectDescription } from '../ProjectCard/ProjectDescription';
import { ProjectImage } from '../ProjectCard/ProjectImage';

export const ProjectsGrid = () => {
	return (
		<section className='grid grid-rows-2 grid-cols-1 p-5 space-y-10'>
			{projects.map(project => (
				<ProjectCard project={project} key={project.title}>
					<ProjectTitle />
					<ProjectDescription />
					<ProjectImage />
				</ProjectCard>
			))}
		</section>
	);
};
