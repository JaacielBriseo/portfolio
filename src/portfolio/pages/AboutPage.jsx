import { NavLink } from 'react-router-dom';
import profilepic from '../../images/profilepic.jpg';

export const AboutPage = () => {
  return (
    <>
      <div className="m-3 flex flex-col items-center justify-center">
        <NavLink className="self-end text-white" to={'/home'}>
          <i className="fa-solid fa-house text-custom mr-2"></i>
        </NavLink>
        <h2 className="text-custom font-Playfair tracking-wide text-3xl mb-8 ">
          About me...
        </h2>
        <img src={profilepic} alt="profilePic" className="rounded-full w-48 " />
        <div className="w-11/12">
          <p className="text-ffa mt-10 border border-custom p-3 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            temporibus? Eligendi quo, laudantium voluptas at excepturi aut
            asperiores similique totam ipsam, alias, architecto expedita minima
            rerum soluta ex itaque adipisci.
          </p>
        </div>
      </div>
    </>
  );
};
