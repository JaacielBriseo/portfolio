import { useContext } from 'react';
import { ProjectContext } from './ProjectCard';

export const ProjectImage = () => {
	const { img ,desc} = useContext(ProjectContext);

	return (
		<div className='relative group'>
			<img src={img} alt='Project screenshot' className='object-cover h-[370px] mx-auto w-full rounded-b-md'/>
			<div className='opacity-0 group-hover:opacity-100 absolute inset-0 duration-1000 bg-black bg-opacity-60 z-10 flex justify-center items-center'>
				<div className='w-8/12 h-1/2 mx-auto flex items-center flex-col justify-center space-y-10 p-3'>
          <p className='text-white'>{desc}</p>
					<a href='https://github.com/JaacielBriseo' className='link'>Navigate to project</a>
					<a href='https://github.com/JaacielBriseo' className='link'>Navigate to repository</a>
				</div>
			</div>
		</div>
	);
};
