interface Props {
	className?: string;
	toggleMobileMenu: () => void;
	isMobileMenuOpen: boolean;
}
export const HamburgerButton: React.FC<Props> = ({ className, toggleMobileMenu, isMobileMenuOpen }) => {
	return (
		<>
			<button className={`block h-10 w-10 p-2 focus:outline-none space-y-1 ${className}`} onClick={toggleMobileMenu}>
				<span
					className={`transform transition duration-300 ease-in-out h-[3px] bg-Dark block ${
						isMobileMenuOpen && 'rotate-45 translate-y-1'
					}  dark:bg-gray-700 `}
				/>
				<span
					className={`transform transition duration-300 ease-in-out h-[3px] bg-Dark  ${
						isMobileMenuOpen ? 'hidden' : 'block'
					} dark:bg-gray-700`}
				/>
				<span
					className={`transform transition duration-300 ease-in-out h-[3px] bg-Dark block  ${
						isMobileMenuOpen && '-rotate-45 -translate-y-1'
					} dark:bg-gray-700`}
				/>
			</button>
		</>
	);
};
