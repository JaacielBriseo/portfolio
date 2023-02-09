import classNames from 'classnames';
import { Link } from '../../router';
import { routesLinks } from '../../constants/routesLinks';
// import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
interface Props {
	className?: string;
}
export const Sidebar: React.FC<Props> = ({ className }) => {
	const classes = classNames(
		'hidden lg:flex w-full h-3/4 bg-transparent flex-col justify-between items-start p-5',
		className
	);
	return (
		<div className={classes}>
			{routesLinks.map(link => (
				<Link key={link.label} to={link.path} className='' activeClassName=''>
					<h1 className='uppercase text-4xl font-thin tracking-widest border-b-2 border-b-[#f03] text-[#08f]'>{link.label}</h1>
				</Link>
			))}
			{/* <ThemeToggler className='mr-5'/> */}
		</div>
	);
};
