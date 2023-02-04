import { ReactElement, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
interface Props {
	children?: ReactElement | ReactElement[] | string | number;
	actionBar?: JSX.Element;
	onClose: () => void;
}
export const ModalContainer: React.FC<Props> = ({ actionBar, children, onClose }) => {
	const divRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, []);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo('.rotate', { scale: 0 }, { scale: 1, duration: 1.5,ease:'bounce' });
		}, divRef);
		return () => ctx.revert();
	}, []);

	return ReactDOM.createPortal(
		<div ref={divRef}>
			<div onClick={onClose} className='rotate fixed inset-0 bg-gray-300 opacity-80'></div>
			<div className='rotate fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-md w-[calc(100vw-20%)] h-[calc(100vh-50%)] z-50'>
				<div className='rotate flex flex-col items-center justify-between h-full'>
					{children}
					{/* <div className='rotate flex justify-end'>{actionBarToShow}</div> */}
				</div>
			</div>
		</div>,
		document.querySelector('.modal-container') as HTMLDivElement
	);
};
