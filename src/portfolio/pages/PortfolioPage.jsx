import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Header, Content, CarousselComp } from '../components';

export const PortfolioPage = () => {
  return (
    <div className='animate__animated animate__fadeIn sm:ml-11'>
      <Header />
      <Content/>
      <CarousselComp/>
    </div>
  );
};
