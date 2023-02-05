import { Navbar } from './components/Navbar/Navbar';
import { ContactPage, HomePage, ProjectsPage } from './pages';
import { Route } from './router';
// import { useState } from 'react';

export const App = () => {
	// const [isLoading, setIsLoading] = useState(true);

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
