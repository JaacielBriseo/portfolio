import { AnimatedText } from '../AnimatedText/AnimatedText';
import { GradientContainer } from '../GradientContainer/GradientContainer';
import { Wrapper } from '../Wrapper/Wrapper';

export const Hero = () => {
	return (
		<GradientContainer>
			<div className='w-full h-full flex flex-col items-center justify-center bg-stars'>
				<Wrapper>
					<AnimatedText text='skilled frontend developer'/>
				</Wrapper>
			</div>
		</GradientContainer>
	);
};
