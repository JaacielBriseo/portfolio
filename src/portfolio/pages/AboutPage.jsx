import profilepic from '../../images/profilepic.png';
import { Navbar } from '../components/Navbar';

export const AboutPage = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn w-[calc(100%_-_65px)] m-auto">
        <h1 className="text-custom m-4 text-2xl font-Playfair text-center">
          ABOUT
        </h1>
        <hr />
        <div className="flex flex-col items-center">
          <img
            src={profilepic}
            alt="profilePic"
            className="w-8/12 "
          />
          <div className=' border border-custom w-11/12'>
            <p className="text-ffa p-3 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              temporibus? Eligendi quo, laudantium voluptas at excepturi aut
              asperiores similique totam ipsam, alias, architecto expedita
              minima rerum soluta ex itaque adipisci.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
