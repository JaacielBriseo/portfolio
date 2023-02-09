import { AnimatedBGContainer } from '../AnimatedBGContainer/AnimatedBGContainer';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import { Sidebar } from '../Sidebar/Sidebar';
import { Wrapper } from '../Wrapper/Wrapper';

export const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<AnimatedBGContainer className='lg:grid lg:grid-cols-3 lg:grid-rows-5'>
				<h1 className='text-white col-span-3 text-center'>Jaaciel</h1>
				<Sidebar className='row-span-3'/>
				<Wrapper>
					<AnimatedText text='skilled frontend developer' />
				</Wrapper>
			</AnimatedBGContainer>
		</div>
	);
};
