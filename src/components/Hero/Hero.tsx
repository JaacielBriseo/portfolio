import { AnimatedBGContainer } from '../AnimatedBGContainer/AnimatedBGContainer';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import { Sidebar } from '../Sidebar/Sidebar';
import { Wrapper } from '../Wrapper/Wrapper';

export const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<AnimatedBGContainer className='lg:grid lg:grid-cols-3 lg:grid-rows-5'>
				<h1 className='hidden border lg:block w-1/5 mx-auto col-span-3 text-center bg-gray-200 dark:bg-opacity-50 px-6 font-bold text-black mix-blend-screen md:text-8xl -skew-x-[15deg]'>
					JB
				</h1>
				<Sidebar className='row-span-3' />
				<Wrapper>
					<AnimatedText />
				</Wrapper>
			</AnimatedBGContainer>
		</div>
	);
};
