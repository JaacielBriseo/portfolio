import { useContext } from 'react';
import { ProjectContext } from './ProjectCard';

export const ProjectImage = () => {
	const { img } = useContext(ProjectContext);
	return <img src={img} alt='Project screenshot' />;
};
