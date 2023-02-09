import { routesLinks } from '../../constants/routesLinks';
import { Link } from '../../router';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';

export const MobileMenu = () => {
	return (
		<div className='flex flex-col md:space-y-5'>
			{routesLinks.map(link => (
				<Link
					key={link.label}
					to={link.path}
					className='mb-3'
					activeClassName='font-bold border-l-4 border-blue-500 pl-2 md:border-l-0 md:border-b-4'>
					<h1 className='text-2xl md:text-3xl'>{link.label}</h1>
				</Link>
			))}
			<ThemeToggler />
		</div>
	);
};
