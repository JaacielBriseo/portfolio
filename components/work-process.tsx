'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

export const WorkProcess = () => {
	return (
		<section className='w-full py-20'>
			<h1 className='heading'>
				My <span className='text-purple'>approach</span>
			</h1>
			<div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
				<Card
					title='Planning & Strategy'
					icon={<GradientButton order='Phase 1' />}
					description='We plan and strategize the project to ensure that we are on the same page. We also discuss the project timeline and the budget.'>
					<CanvasRevealEffect
						animationSpeed={5.1}
						containerClassName='bg-emerald-900'
					/>
				</Card>
				<Card
					title='Development & Progress Update'
					description='Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.'
					icon={<GradientButton order='Phase 2' />}>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName='bg-black'
						colors={[
							[236, 72, 153],
							[232, 121, 249],
						]}
						dotSize={2}
					/>
				</Card>
				<Card
					title='Ready for deploy'
					description={`This is where the magic happens! I'll launch your project up.`}
					icon={<GradientButton order='Phase 3' />}>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName='bg-sky-600'
						colors={[[125, 211, 252]]}
					/>
				</Card>
			</div>
		</section>
	);
};

const Card = ({
	title,
	icon,
	description,
	children,
}: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
	description: string;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl'>
			<CornerPlusIcon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
			<CornerPlusIcon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
			<CornerPlusIcon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
			<CornerPlusIcon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='h-full w-full absolute inset-0'>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-20'>
				<div className='text-center group-hover/canvas-card:-translate-y-4 absolute inset-0 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center'>
					{icon}
				</div>
				<h2 className='dark:text-white text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-3xl'>
					{title}
				</h2>
				<h2
					style={{
						color: '#e4ecff',
					}}
					className='dark:text-white text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200'>
					{description}
				</h2>
			</div>
		</div>
	);
};

const GradientButton = ({ order }: { order: string }) => {
	return (
		<button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
			<span className='absolute -z-10 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
			<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl text-3xl'>
				{order}
			</span>
		</button>
	);
};

const CornerPlusIcon = ({
	className,
	...rest
}: React.HTMLAttributes<SVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
			{...rest}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 6v12m6-6H6'
			/>
		</svg>
	);
};
