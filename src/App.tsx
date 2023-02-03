import { ContactPage, HomePage, ProjectsPage } from './pages';
import { Route } from './router';

export const App = () => {
	return (
		<div>
			<Route path='/' children={<HomePage />} />
			<Route path='/contact' children={<ContactPage />} />
			<Route path='/projects' children={<ProjectsPage />} />
		</div>
	);
};
