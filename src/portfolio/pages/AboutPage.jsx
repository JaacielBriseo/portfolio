import profilepic from '../../images/profilepic.png';
import { Navbar } from '../components/Navbar';

export const AboutPage = () => {
	return (
		<>
			<div className='animate__animated animate__fadeIn w-[calc(100%_-_65px)] m-auto'>
				<h1 className='text-custom m-4 text-2xl font-Playfair text-center'>ABOUT</h1>
				<hr />
				<section className='text-gray-400'>
					<div className='container px-5 py-10 mx-auto'>
						<div className='flex flex-wrap -m-4'>
							<div className='lg:w-1/3 lg:mb-0 p-4'>
								<div className='h-full text-center'>
									<img
										alt='testimonial'
										className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
										src={profilepic}
									/>
									<p className='leading-relaxed'>
										Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1
										kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
										adaptogen squid fanny pack vaporware.
									</p>
									<span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
									<h2 className='text-custom font-medium title-font tracking-wider text-sm'>JAACIEL BRISEÑO</h2>
									<p className='text-gray-500'>FULLSTACK DEVELOPER</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
