import { GoBrowser, GoMarkGithub } from 'react-icons/go';
import { Project } from '../../interfaces/interfaces';
export const ProjectCard = ({ project }: { project: Project }) => {
	const { desc, img, title } = project;
	return (
		<div className='w-[327px] mx-auto rounded-lg shadow-2xl'>
			<div className='relative group'>
				<h1 className='leading-10 tracking-wider text-2xl text-center text-white bg-secondary'>{title}</h1>
				<img src={img} alt='Project screenshot' className='w-full object-top object-cover h-[16rem]' />
				<div className='opacity-0 group-hover:opacity-100 absolute inset-0 duration-1000 bg-black bg-opacity-80 rounded flex justify-center items-center'>
					<div className='w-9/12 h-1/2 mx-auto flex items-center flex-col justify-center space-y-10'>
						<p className='text-white'>{desc}</p>
						<div className='flex text-xs text-center space-x-10'>
							<div className='flex flex-col items-center space-y-5'>
								<a href='https://github.com/JaacielBriseo' className='link'>
									Navigate to project
								</a>
								<GoBrowser className='text-fourth w-10 h-7' />
							</div>
							<div className='flex flex-col items-center space-y-5'>
								<a href='https://github.com/JaacielBriseo' className='link'>
									Navigate to repository
								</a>
								<GoMarkGithub className='text-fourth w-10 h-7' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
