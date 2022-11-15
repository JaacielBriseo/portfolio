import { Carousel } from 'react-responsive-carousel';
import { Navbar } from '../components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const PortfolioPage = () => {
  return (
    <>
      <h1>Portafolio</h1>
      <Carousel className='w-2/4 content-center' >
        <img
          src="https://res.cloudinary.com/doyovakvf/image/upload/v1667542349/nomnom/paquetesback_mekji7.jpg"
          alt=""
          className='w-2/4'
        />

        <img
          src="https://res.cloudinary.com/doyovakvf/image/upload/v1667542345/nomnom/globosback_xhubeg.jpg"
          alt=""
          className='w-2/4'
        />

        <img
          src="https://res.cloudinary.com/doyovakvf/image/upload/v1667542345/nomnom/ramoflores_cbxjcx.jpg"
          alt=""
          className='w-2/4'
        />
      </Carousel>
      
      <Navbar />
    </>
  );
};
