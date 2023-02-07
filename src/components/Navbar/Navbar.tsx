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
			<div className='flex flex-col'>
				<div className='flex justify-between items-center p-3 h-24'>
					<h1
						onClick={() => navigate('/')}
						className='text-primary text-5xl leading-5 tracking-wider font-medium cursor-pointer'>
						JB
					</h1>
					<HamburgerButton toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
				</div>
			</div>
			<ModalContainer isMobileMenuOpen={isMobileMenuOpen} onClose={toggleMobileMenu} children={<MobileMenu />} />
		</>
	);
};
