import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import { useWindowSize } from '../../hooks';
interface Props {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}
export const AnimatedBGContainer: React.FC<Props> = ({ children, className }) => {
	const { width } = useWindowSize();
	const primaryDiv = useRef<HTMLDivElement>(null);
	const classes = classNames(
		'w-full h-full flex flex-col items-center justify-center bg-day bg-fixed bg-cover bg-top dark:bg-night relative',
		className
	);
	useLayoutEffect(() => {
		const el = primaryDiv.current;
		const ctx = gsap.context(() => {
			gsap.to(el, {
				backgroundPosition: '100% 0',
				ease: 'none',
				repeat: -1,
				yoyo: true,
				duration: width && width >= 1024 ? 10 : 20,
			});
		});
		return () => ctx.revert();
	}, [width]);
	return (
		<div ref={primaryDiv} className={classes}>
			{children}
		</div>
	);
};
