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
        <div className="bg-zinc-800 fixed bottom-0 w-screen h-12 mb-3 flex justify-evenly items-center rounded-b-sm rounded-t-sm">
          <button className="bg-black h-10 w-10 rounded-xl hover:bg-yellow-500">
            <i className="fa-solid fa-house text-yellow-500 text-s hover:text-black"></i>
          </button>
          <button className="bg-black h-10 w-10 rounded-xl hover:bg-yellow-500">
            <i className="fa-solid fa-suitcase text-yellow-500 text-s hover:text-black"></i>
          </button>
          <button className="bg-black h-10 w-10 rounded-xl hover:bg-yellow-500">
            <i className="fa-solid fa-user text-yellow-500 text-s hover:text-black"></i>
          </button>
          <button className="bg-black h-10 w-10 rounded-xl hover:bg-yellow-500">
            <i className="fa-solid fa-id-card text-yellow-500 text-s hover:text-black"></i>
          </button>
        </div>
      </div>
    </>
  );
};
