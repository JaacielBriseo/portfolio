import { ReactElement, useEffect, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
interface Props {
	children?: ReactElement | ReactElement[] | string | number;
	actionBar?: JSX.Element;
	onClose: () => void;
	isMobileMenuOpen: boolean;
}
export const ModalContainer: React.FC<Props> = ({ isMobileMenuOpen, children, onClose }) => {
	const divRef = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>();
	useEffect(() => {
		if (!isMobileMenuOpen) return;
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, [isMobileMenuOpen]);
	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current && tl.current.progress(0).kill();
			tl.current = gsap
				.timeline({ paused: true })
				.fromTo('.dropdown', { x: '100%' }, { x: '0%', duration: 0.5, ease: 'linear' });
		}, divRef);
		return () => ctx.revert();
	}, []);
	useEffect(() => {
		isMobileMenuOpen ? tl.current?.play() : tl.current?.reverse();
	}, [isMobileMenuOpen]);

	return ReactDOM.createPortal(
		<div ref={divRef}>
			<div
				onClick={onClose}
				className='dropdown fixed inset-0 bg-white bg-opacity-95 mt-24 dark:bg-Dark dark:bg-opacity-95'></div>
			<div className='dropdown fixed top-1/3 left-1/2 mt-40 -translate-x-1/2 -translate-y-1/2 rounded-md w-[calc(100vw-20%)] h-[calc(100vh-50%)] z-50 '>
				<div className=' flex flex-col items-center justify-between h-full'>
					{children}
					{/* <div className=' flex justify-end'>{actionBarToShow}</div> */}
				</div>
			</div>
		</div>,
		document.querySelector('.modal-container') as HTMLDivElement
	);
};
