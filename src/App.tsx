import { Navbar } from './components/Navbar/Navbar';
import { ContactPage, HomePage, ProjectsPage } from './pages';
import { Route } from './router';

export const App = () => {
	return (
		<div className='bg-white dark:bg-Dark dark:bg-opacity-95'>
			<Navbar />
			<div>
				<Route path='/' children={<HomePage />} />
				<Route path='/contact' children={<ContactPage />} />
				<Route path='/projects' children={<ProjectsPage />} />
			</div>
		</div>
	);
};
