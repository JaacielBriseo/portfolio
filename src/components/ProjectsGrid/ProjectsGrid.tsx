import { projects } from '../../constants/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectTitle } from '../ProjectCard/ProjectTitle';
import { ProjectImage } from '../ProjectCard/ProjectImage';

export const ProjectsGrid = () => {
	return (
		<section className='grid grid-cols-1 p-5 space-y-10'>
			{projects.map(project => (
				<ProjectCard project={project} key={project.title}>
					<ProjectTitle />
					<ProjectImage />
				</ProjectCard>
			))}
		</section>
	);
};
