import { useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { ModalContainer } from '../ModalContainer/ModalContainer';
import { useNavigation } from '../../hooks';

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const toggleMobileMenu = () => setIsMobileMenuOpen(current => !current);
	const { navigate } = useNavigation();

	return (
		<>
			<nav className={`flex flex-col lg:hidden`}>
				<div className='flex justify-between items-center p-3 h-24'>
					<h1
						onClick={() => navigate('/')}
						className='text-BrightRed dark:brightness-125 text-5xl -tracking-[0.27em] cursor-pointer'>
						JB
					</h1>
					<HamburgerButton toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
				</div>
			</nav>
			<ModalContainer isMobileMenuOpen={isMobileMenuOpen} onClose={toggleMobileMenu} children={<MobileMenu onClose={toggleMobileMenu}/>} />
		</>
	);
};
