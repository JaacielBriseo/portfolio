import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<>
			<div className='invisible sm:visible fixed top-0 flex flex-col justify-start items-center w-10 text-white bg-20if h-full'>
				<i className='fa-sharp fa-solid fa-user-astronaut text-black m-2 rounded p-2 bg-custom'></i>
				<div className='mt-32 self-center text-custom'>
					<NavLink to={'/home'}>
						<i className='fa-solid fa-house m-7 hover:scale-150'></i>
					</NavLink>
					<NavLink to={'/projects'}>
						<i className='fa-solid fa-suitcase m-7 hover:scale-150'></i>
					</NavLink>
					<NavLink to={'/about'}>
						<i className='fa-solid fa-user m-7 hover:scale-150'></i>
					</NavLink>
					<NavLink to={'/contact'}>
						<i className='fa-solid fa-id-card m-7 hover:scale-150'></i>{' '}
					</NavLink>
					<div className='mt-20'>
						<i className='fa-brands fa-github ml-7'></i>
						<i className='fa-brands fa-twitter ml-7'></i>
						<i className='fa-brands fa-instagram ml-7'></i>
					</div>
				</div>
			</div>
			<div className='bg-20if fixed bottom-0 w-screen h-12 mb-3 flex justify-evenly items-center rounded-b-sm rounded-t-sm sm:hidden'>
				<NavLink
					to={'/home'}
					className='hover:shadow-sm hover:shadow-ffa h-8 w-8 rounded-xl flex justify-center items-center hover:scale-125'
				>
					<i className='fa-solid fa-house text-custom '></i>
				</NavLink>
				<NavLink
					to={'/projects'}
					className='hover:shadow-sm hover:shadow-ffa h-8 w-8 rounded-xl flex justify-center items-center hover:scale-125'
				>
					<i className='fa-solid fa-suitcase text-custom '></i>
				</NavLink>
				<NavLink to={'/about'} className='hover:shadow-sm hover:shadow-ffa h-8 w-8 rounded-xl flex justify-center items-center hover:scale-125'>
					<i className='fa-solid fa-user text-custom '></i>
				</NavLink>
				<NavLink
					to={'/contact'}
					className='hover:shadow-sm hover:shadow-ffa h-8 w-8 rounded-xl flex justify-center items-center hover:scale-125'
				>
					<i className='fa-solid fa-id-card text-custom'></i>
				</NavLink>
			</div>
		</>
	);
};
