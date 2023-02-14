import { useTheme } from '../../hooks';
interface Props {
	className?: string;
}
export const ThemeToggler: React.FC<Props> = ({ className }) => {
	const { theme, setTheme } = useTheme();
	const toggleClass = ' transform translate-x-5';
	const toggleDarkMode = () => {
		setTheme(current => (current === 'light' ? 'dark' : 'light'));
	};
	return (
		<div className={`flex justify-center items-center mt-5 space-x-2 ${className}`}>
			<div
				className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer'
				onClick={() => {
					toggleDarkMode();
				}}>
				<div
					className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${
						theme === 'dark' && toggleClass
					}`}
				/>
			</div>
			<img src='/assets/icon-moon.svg' alt='' />
		</div>
	);
};
