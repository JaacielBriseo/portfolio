import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/gifexpertpng.png';
import img2 from '../../images/blackjack.png';
import img3 from '../../images/alert.png';
import { NavLink } from 'react-router-dom';
export const CarousselComp = () => {
	return (
		<>
			<h1 className='text-ffa font-Playfair tracking-wide text-lg m-3 sm:text-2xl mt-5'>Categories</h1>
			<div className='mt-7 flex justify-center '>
				<Carousel className='w-72 sm:w-9/12 m-auto' showThumbs={false}  infiniteLoop autoPlay showIndicators={false} showStatus={false}>
					<div className='sm:w-3/4 m-auto'>
						<img src={img1} alt='imgcarousel' className='rounded-md' />
						<NavLink to={'/Projects'} className='text-bluecntc underline'>
							Projects
						</NavLink>
					</div>
					<div className='sm:w-3/4 m-auto'>
						<img src={img2} alt='imgcarousel' className='rounded-md' />
						<NavLink to={'/About'} className='text-bluecntc underline'>
							About
						</NavLink>
					</div>
					<div className='sm:w-3/4 m-auto'>
						<img src={img3} alt='imgcarousel' className='rounded-md ' />
						<NavLink to={'/Contact'} className='text-bluecntc underline'>
							Contact
						</NavLink>
					</div>
				</Carousel>
			</div>
		</>
	);
};
