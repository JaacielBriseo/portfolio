import classNames from 'classnames';
import { Link } from '../../router';
import { routesLinks } from '../../constants/routesLinks';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
interface Props {
	className?: string;
}
export const Sidebar: React.FC<Props> = ({ className }) => {
	const divRef = useRef<HTMLDivElement>(null);
	const classes = classNames(
		'hidden lg:flex w-full h-3/4 bg-transparent flex-col justify-between items-start p-5',
		className
	);
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo('.item', { x: -1000 }, { x: 0, stagger: 0.2, duration: 1.5, ease: 'back' });
		}, divRef);
		return () => ctx.revert();
	}, []);

	return (
		<div ref={divRef} className={classes}>
			{routesLinks.map(link => (
				<Link key={link.label} to={link.path}>
					<h1 className='item uppercase text-4xl tracking-widest border-b-2 border-b-[#f03] text-[#08f]'>
						{link.label}
					</h1>
				</Link>
			))}
			<ThemeToggler className='item mr-5' />
		</div>
	);
};