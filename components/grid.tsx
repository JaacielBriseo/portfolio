import Image from 'next/image';

import { cn } from '@/lib/utils';

import GridGlobe from './ui/grid-globe';
import { BentoGrid } from './ui/bento-grid';
import { GradientBg } from './ui/gradient-bg';
import { CopyEmailAddress } from './copy-email-address';

const leftLists = [
	'Git',
	'GraphQL',
	'ReactJS',
	'NextJS',
	'Typescript',
	'NodeJS',
	'MongoDB',
	'PostgreSQL',
	'MySQL',
	'Angular',
];
const rightLists = [
	'Jest',
	'Laravel',
	'VueJS',
	'PHP',
	'Docker',
	'NestJS',
	'Firebase',
	'TailwindCSS',
	'GSAP',
	'Framer Motion',
	'ThreeJS',
	'Cypress',
];

export const Grid = () => {
	return (
		<section id='about'>
			<BentoGrid className='size-full py-24'>
				{/* Globe */}
				<article
					id='globe'
					style={{
						background: 'rgb(4,7,29)',
						backgroundColor:
							'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
					}}
					className={cn(
						'row-span-1 min-h-40 rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]'
					)}>
					<div className={`size-full`}>
						<section className='flex flex-col sm:flex-row sm:items-center lg:flex-col-reverse lg:items-start size-full'>
							<div className='px-5 pt-5 lg:pb-5'>
								<h3
									className={`font-sans text-lg md:text-xl lg:text-3xl max-w-xs font-bold group-hover/bento:translate-x-2 transition duration-200`}>
									I&apos;m very flexible with time zone communications
								</h3>
							</div>
							<div className='size-full relative flex-1 cursor-grab active:cursor-grabbing md:self-center'>
								<GridGlobe />
							</div>
						</section>
					</div>
				</article>
				{/* Collaboration */}
				<article
					id='collaboration'
					style={{
						background: 'rgb(4,7,29)',
						backgroundColor:
							'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
					}}
					className='row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2'>
					<div className={`size-full`}>
						<div className='size-full absolute'>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={'/b1.svg'}
								alt={'b1'}
								className='object-cover object-center size-full'
							/>
						</div>
						<div
							className={cn(
								'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col justify-end px-5 p-5 lg:p-10'
							)}>
							<div className={`font-sans text-lg max-w-96 font-bold z-10`}>
								<h3>
									I prioritize team collaboration fostering open communication
								</h3>
							</div>
						</div>
					</div>
				</article>
				{/* Tech stack */}
				<article
					id='tech-stack'
					style={{
						background: 'rgb(4,7,29)',
						backgroundColor:
							'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
					}}
					className='row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2'>
					<section
						className={cn(
							'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col justify-center p-5 z-10'
						)}>
						<div className={`font-sans`}>
							<p className='max-w-[75%] text-sm font-light leading-5'>
								I&apos;m constantly improving and mastering
								<br />
								<span className='font-bold text-lg lg:text-3xl'>
									{' '}
									My tech stack
								</span>
							</p>
						</div>
					</section>
					<section className='flex gap-3 lg:gap-5 absolute -right-3 h-full'>
						<div className='flex flex-col gap-3 md:gap-3 lg:gap-8 animate-scrollVertical'>
							{[...leftLists, ...leftLists, ...leftLists].map((item, i) => (
								<span
									key={i}
									className='lg:py-4 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
									{item}
								</span>
							))}
						</div>
						<div className='flex flex-col-reverse justify-start gap-3 md:gap-3 lg:gap-8 animate-scrollVerticalReverse h-full'>
							{[...rightLists, ...rightLists, ...rightLists].map((item, i) => (
								<span
									key={i}
									className='lg:py-4 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
									{item}
								</span>
							))}
						</div>
					</section>
				</article>
				{/* Tech enthusiast */}
				<article
					style={{
						background: 'rgb(4,7,29)',
						backgroundColor:
							'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
					}}
					className={cn(
						'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2'
					)}>
					<div className={`h-full relative`}>
						<div className='size-full absolute'>
							<Image
								src={'/grid.svg'}
								alt={'grid'}
								fill
								className={cn('object-cover object-center ')}
							/>
						</div>
						<div className={`absolute right-0 -bottom-5 `}>
							<Image
								src={'/b4.svg'}
								alt={'b4'}
								fill
								className='!static object-cover object-center size-full'
							/>
						</div>

						<div
							className={cn(
								'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col justify-start px-5 p-5 lg:p-10'
							)}>
							<div
								className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
								Tech enthusiast with a passion for development.
							</div>
						</div>
					</div>
				</article>
				{/* Inside scopp */}
				<article
					style={{
						background: 'rgb(4,7,29)',
						backgroundColor:
							'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
					}}
					className={cn(
						'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 md:col-span-3 md:row-span-3'
					)}>
					<div className='size-full absolute'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={'/b5.svg'}
							alt={'b5'}
							// fill
							className={cn(
								'object-cover absolute object-center right-0 bottom-0 md:w-96 w-60'
							)}
						/>
					</div>
					<div className={`absolute right-0 -bottom-5 opacity-80`}>
						<Image
							src={'/grid.svg'}
							alt={'grid'}
							fill
							className='object-cover object-center size-full'
						/>
					</div>

					<div
						className={cn(
							'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:justify-start lg:justify-center'
						)}>
						<h3 className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
							The Inside Scoop
						</h3>

						<p
							className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
							Currently working in a software factory as{' '}
							<span className='text-purple'>software developer</span>
						</p>
					</div>
				</article>
				{/* Copy email */}
				<article
					className={cn(
						'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-1'
					)}
					style={{
						background: 'rgb(4,7,29)',
						backgroundColor:
							'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
					}}>
					<div className={`flex justify-center h-full`}>
						<GradientBg>
							<div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
						</GradientBg>

						<div
							className={cn(
								'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
								{
									'justify-center md:max-w-full max-w-60 text-center': true,
								}
							)}>
							<div
								className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
								Do you want to start a project ?
							</div>

							<CopyEmailAddress />
						</div>
					</div>
				</article>
			</BentoGrid>
		</section>
	);
};
