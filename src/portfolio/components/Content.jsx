import icon from '../../assets/silueta.png';
export const Content = () => {
	return (
		<>
			<div className='sm:m-0 flex '>
				<div className=''>
					<h1 className='text-ffa font-Poppins m-3 text-[6vw]'>
						This is my first attempt of
						<span className='text-custom'> portfolio </span>
					</h1>
				</div>
				<div className='hidden sm:flex justify-end w-[calc(100%_-_42vw)]'>
					<img src={icon} alt='icono' className='animate__animated animate__flip'/>
				</div>
			</div>
			<div className='flex justify-center'>
				<input type='search' placeholder='&#128269; Search' className='bg-20if w-11/12 h-10 sm:h-14 rounded-full' />
			</div>
		</>
	);
};
