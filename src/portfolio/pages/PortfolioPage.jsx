import { Carousel } from 'react-responsive-carousel';
import { Navbar } from '../components/Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { CarousselComp } from '../components/CarousselComp';

export const PortfolioPage = () => {
  return (
    <>
      <Header />
      <Content/>
      <Navbar />
      <CarousselComp/>
    </>
  );
};
