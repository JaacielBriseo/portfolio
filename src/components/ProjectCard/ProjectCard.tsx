import { GoBrowser, GoMarkGithub } from 'react-icons/go';
import { Project } from '../../interfaces/interfaces';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface Props {
	project: Project;
	flipDirection: string;
}
export const ProjectCard: React.FC<Props> = ({ project, flipDirection }) => {
	const { desc, img, title, demo, repository } = project;
	const cardRef = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: cardRef.current!,
				start: 'bottom +=120',
				end: 'bottom',
				toggleActions: 'restart resume reverse pause',
				scrub: 2,
			},
		});
		const ctx = gsap.context(() => {
			tl.fromTo(
				cardRef.current,
				{ x: 0, y: 0, scale: 1, rotation: 0 },
				{
					duration: 2,
					x: flipDirection === 'right' ? 1000 : -1000,
					y: 400,
					scale: 0,
					rotation: 360,
				}
			);
		}, cardRef);
		return () => ctx.revert();
	}, [flipDirection]);
	return (
		<div ref={cardRef} className='w-[327px] mx-auto rounded-lg shadow-2xl'>
			<div className='relative group hover:outline hover:outline-4 outline-offset-8 outline-BrightRed'>
				<h1 className='leading-10 tracking-wider font-light text-2xl text-center text-gray-100 bg-red-600'>{title}</h1>
				<img src={img} alt='Project screenshot' className='w-full object-top object-cover h-[16rem] rounded-b' />
				<div className='opacity-0 group-hover:opacity-100 absolute inset-0 duration-1000 bg-black bg-opacity-80 rounded flex justify-center items-center'>
					<div className='w-9/12 h-1/2 mx-auto flex items-center flex-col justify-center space-y-10'>
						<p className='text-gray-400 brightness-110 font-medium leading-relaxed'>{desc}</p>
						<div className='flex text-xs text-center space-x-10'>
							<div className='flex flex-col items-center space-y-5 text-BrightBlue'>
								<a href={demo} className='text-lg font-medium hover:underline'>
									Navigate to project
								</a>
								<GoBrowser className='w-10 h-7' />
							</div>
							<div className='flex flex-col items-center space-y-5 text-BrightBlue'>
								<a href={repository} className='text-lg font-medium hover:underline'>
									Navigate to repository
								</a>
								<GoMarkGithub className='w-10 h-7' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
