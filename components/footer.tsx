import Image from 'next/image';

import { ArrowUpRightIcon } from 'lucide-react';
import { socialMedia } from '@/constants';
import MagicButton from './magic-button';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer
			className='w-full pb-10'
			id='contact'>
			<div className='flex flex-col items-center'>
				<h1 className='heading lg:max-w-[45vw]'>
					Ready to take <span className='text-purple'>your</span> digital
					presence to the next level?
				</h1>
				<p className='text-white-200 md:mt-10 my-5 text-center'>
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>
				<a href='mailto:jaacielbris23@gmail.com'>
					<MagicButton
						title="Let's get in touch"
						icon={<ArrowUpRightIcon />}
						position='right'
					/>
				</a>
			</div>
			<div className='flex mt-16 md:flex-row flex-col gap-5 justify-between items-center'>
				<div className='flex flex-col-reverse md:flex-row items-center md:items-end justify-between w-full md:gap-3 gap-6'>
					<p className='text-[11px] font-light'>
						Original design inspiration from{' '}
						<a
							target='_blank'
							className='active:underline hover:underline'
							href='https://resource.jsmastery.pro/minimal-portfolio'>
							here
						</a>
					</p>
					<ul className='flex items-center gap-6 md:gap-3'>
						{socialMedia.map(info => (
							<Link
								target='_blank'
								href={info.link}
								key={info.id}
								className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
								<Image
									src={info.img}
									alt='icons'
									width={20}
									height={20}
								/>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};
