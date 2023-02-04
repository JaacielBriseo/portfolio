import { useState } from 'react';
import { useDarkSide } from '../../hooks';


export const ThemeToggler = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const [toggle, setToggle] = useState(true);
	const toggleClass = ' transform translate-x-5';
	const toggleDarkMode = () => {
		setTheme(colorTheme);
		setToggle(!toggle);
	};
	return (
		<div className='flex flex-col justify-center items-center mt-5'>
			<div
				className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer'
				onClick={() => {
					setToggle(!toggle);
					toggleDarkMode();
				}}>
				<div
					className={
						'bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
						(toggle ? null : toggleClass)
					}></div>
			</div>
		</div>
	);
};