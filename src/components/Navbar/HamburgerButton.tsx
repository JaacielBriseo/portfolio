import { useState } from 'react';
interface Props {
	className?: string;
}
export const HamburgerButton: React.FC<Props> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className={`block h-10 w-10 p-2 focus:outline-none space-y-1 ${className}`}
				onClick={() => setIsOpen(!isOpen)}>
				<span
					className={`transform transition duration-300 ease-in-out h-[3px] bg-Dark block ${
						isOpen && 'rotate-45 translate-y-1'
					}  dark:bg-gray-700 `}
				/>
				<span
					className={`transform transition duration-300 ease-in-out h-[3px] bg-Dark  ${isOpen ? 'hidden' : 'block'} dark:bg-gray-700`}
				/>
				<span
					className={`transform transition duration-300 ease-in-out h-[3px] bg-Dark block  ${
						isOpen && '-rotate-45 -translate-y-1'
					} dark:bg-gray-700`}
				/>
			</button>
		</>
	);
};
