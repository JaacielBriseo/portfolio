import { useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { ModalContainer } from '../ModalContainer/ModalContainer';

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const toggleMobileMenu = () => setIsMobileMenuOpen(current => !current);
	return (
		<>
			<div className='flex flex-col'>
				<div className='flex justify-between items-center p-3 h-24'>
					<h1 className='text-primary text-xl leading-5 tracking-wider font-medium'>JaacielBriseño</h1>
					<HamburgerButton toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
				</div>
			</div>
			{isMobileMenuOpen && <ModalContainer onClose={toggleMobileMenu} children={<MobileMenu />} />}
		</>
	);
};
