import profilepic from '../../images/profilepic.png';
import { Navbar } from '../components/Navbar';

export const AboutPage = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <h1 className="text-custom m-4 text-2xl font-Playfair text-center">
          ABOUT
        </h1>
        <hr />
        <div className="flex flex-col my-8">
          <img
            src={profilepic}
            alt="profilePic"
            className="rounded-full w-10/12 self-center"
          />
          <p className="text-ffa border border-custom p-3 rounded-lg">
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
