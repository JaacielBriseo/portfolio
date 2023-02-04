import { Link } from '../../router';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

export const MobileMenu = () => {
	const links = [
		{ label: 'Home', path: '/' },
		{ label: 'Contact', path: '/contact' },
		{ label: 'Projects', path: '/projects' },

	];
	return (
		<div className='flex flex-col'>
			{links.map(link => (
				<Link
					key={link.label}
					to={link.path}
					className='mb-3'
					activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
					<h1>{link.label}</h1>
				</Link>
			))}
			<ThemeToggler />
		</div>
	);
};
