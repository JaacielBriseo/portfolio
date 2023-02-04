import { createContext, ReactNode } from 'react';
import { Project } from '../../interfaces/interfaces';
interface Props {
	project: Project;
	children: ReactNode | ReactNode[];
}
export const ProjectContext = createContext({} as Project);
const { Provider } = ProjectContext;
export const ProjectCard: React.FC<Props> = ({ project, children }) => {
	return (
		<Provider value={project}>
			<div className='border'>{children}</div>
		</Provider>
	);
};
