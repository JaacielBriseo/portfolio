import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { HamburgerButton } from './HamburgerButton';

export const Navbar = () => {
	return (
		<div className='flex justify-between items-center p-3 h-24'>
			<h1 className='text-primary text-xl leading-5 tracking-wider font-medium'>JaacielBriseño</h1>
			<ThemeToggler />
			<HamburgerButton />
		</div>
	);
};
