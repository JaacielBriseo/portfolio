import { useContext } from 'react';
import { ProjectContext } from './ProjectCard';

export const ProjectTitle = () => {
	const { title } = useContext(ProjectContext);
	return <h1 className='font-bold leading-10 tracking-wider text-2xl text-center'>{title}</h1>;
};
