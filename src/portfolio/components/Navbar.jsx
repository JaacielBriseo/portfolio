import { NavLink } from 'react-router-dom';
import icon from '../../assets/icon.svg';

export const Navbar = () => {
  return (
    <>
      <div className="sm:flex sm:flex-row">
        <div className="hidden sm:block h-screen w-10 mr-4 text-center bg-zinc-900">
          <img src={icon} alt="icono" className="mt-2 mb-8 " />

          <i className="fa-solid fa-house text-white m-3 mb-8 hover:scale-150"></i>
          <i className="fa-solid fa-suitcase text-white m-3 mb-8 hover:scale-150"></i>
          <i className="fa-solid fa-user text-white m-3 mb-8 hover:scale-150"></i>
          <i className="fa-solid fa-id-card text-white m-3 mb-8 hover:scale-150"></i>
        </div>
        <div className="bg-20if fixed bottom-0 w-screen h-12 mb-3 flex justify-evenly items-center rounded-b-sm rounded-t-sm sm:hidden">
          <NavLink to={'/home'} className="bg-black h-10 w-10 rounded-xl flex justify-center items-center hover:bg-custom">
            <i className="fa-solid fa-house text-custom  hover:text-black"></i>
          </NavLink>
          <NavLink to={'/projects'} className="bg-black h-10 w-10 rounded-xl flex justify-center items-center hover:bg-custom">
            <i className="fa-solid fa-suitcase text-custom  hover:text-black"></i>
          </NavLink>
          <NavLink to={'/about'} className="bg-black h-10 w-10 rounded-xl flex justify-center items-center hover:bg-custom">
            <i className="fa-solid fa-user text-custom  hover:text-black"></i>
          </NavLink>
          <NavLink
            to={'/contact'}
            className="bg-black h-10 w-10 rounded-xl flex justify-center items-center hover:bg-custom"
          >
            <i className="fa-solid fa-id-card text-custom hover:text-black"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};
