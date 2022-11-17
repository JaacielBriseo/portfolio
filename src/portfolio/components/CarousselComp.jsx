import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/gifexpertpng.png';
import img2 from '../../images/profilepic.png';
import img3 from '../../images/moonimg.jpg';
import { NavLink } from 'react-router-dom';
export const CarousselComp = () => {
  return (
    <>
      <h1 className="text-ffa font-Playfair tracking-wide text-lg m-3 ">
        Categories
      </h1>
      <div className="w-full mt-7 ">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showIndicators={false}
          showStatus={false}
        >
          <div className="m-3">
            <img src={img1} alt="" className="h-52 rounded-md" />
            <NavLink to={'/Projects'} className="text-bluecntc underline">
              Projects
            </NavLink>
          </div>
          <div className="m-3">
            <img src={img2} alt="" className="h-52 rounded-md" />
            <NavLink to={'/About'} className="text-bluecntc underline">
              About
            </NavLink>
          </div>
          <div className="m-3">
            <img src={img3} alt="" className="h-52 rounded-md" />
            <NavLink to={'/Contact'} className="text-bluecntc underline">
              Contact
            </NavLink>
          </div>
        </Carousel>
      </div>
    </>
  );
};
