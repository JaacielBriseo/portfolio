import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Header, Content, CarousselComp } from '../components';

export const PortfolioPage = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <Header />
      <Content/>
      <CarousselComp/>
    </div>
  );
};
