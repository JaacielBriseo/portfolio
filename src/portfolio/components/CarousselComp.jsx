import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/3.jpg';
import img3 from '../../images/A13.jpg';
import img4 from '../../images/18.jpg';
export const CarousselComp = () => {
  return (
    <>
      <h1 className="text-ffa font-Playfair tracking-wide text-lg m-3 ">Categories</h1>
      <div className="w-full mt-7 ">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showIndicators={false}
          showStatus={false}
        >
        
          <img src={img1} alt="" className="rounded-3xl" />
          <img src={img3} alt="" className="rounded-3xl" />
          <img src={img4} alt="" className="rounded-3xl" />
        </Carousel>
      </div>
    </>
  );
};
