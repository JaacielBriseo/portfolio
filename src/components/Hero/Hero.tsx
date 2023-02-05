import { AnimatedBGContainer } from '../AnimatedBGContainer/AnimatedBGContainer';
import { AnimatedText } from '../AnimatedText/AnimatedText';
// import { GradientContainer } from '../GradientContainer/GradientContainer';
import { Wrapper } from '../Wrapper/Wrapper';

export const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<AnimatedBGContainer>
				<Wrapper>
					<AnimatedText text='skilled frontend developer' />
				</Wrapper>
			</AnimatedBGContainer>
		</div>
	);
};
