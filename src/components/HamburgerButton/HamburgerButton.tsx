import gsap from 'gsap';
import { useRef, useEffect } from 'react';
interface Props {
	className?: string;
	toggleMobileMenu: () => void;
	isMobileMenuOpen: boolean;
}
export const HamburgerButton: React.FC<Props> = ({ className, toggleMobileMenu, isMobileMenuOpen }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const tl = useRef<gsap.core.Timeline>();
	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current && tl.current.progress(0).kill();
			tl.current = gsap
				.timeline({ paused: true })
				.fromTo(buttonRef.current, { rotation: 360 }, { rotation: 45, duration: 0.3, ease: 'none' });
		}, buttonRef);
		return () => ctx.revert();
	}, []);
	useEffect(() => {
		isMobileMenuOpen ? tl.current?.play() : tl.current?.reverse();
	}, [isMobileMenuOpen]);
	return (
		<button
			ref={buttonRef}
			className={`h-12 w-12 p-2 border border-gray-400 focus:outline-none space-y-1.5 ${className}`}
			onClick={toggleMobileMenu}>
			<span
				className={`transform transition duration-300 ease-in-out h-[2.5px] bg-BrightRed block ${
					isMobileMenuOpen && 'rotate-90 translate-y-[3px]'
				}  `}
			/>
			<span
				className={`transform transition duration-300 ease-in-out h-[2.5px] bg-BrightRed  ${
					isMobileMenuOpen ? 'hidden' : 'block'
				}`}
			/>
			<span
				className={`transform transition duration-300 ease-in-out h-[2.5px]  bg-BrightRed block  ${
					isMobileMenuOpen && 'rotate-180 -translate-y-1'
				}`}
			/>
		</button>
	);
};
