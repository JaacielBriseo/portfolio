import { useState, useRef, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import gsap from 'gsap';
export const ContactPage = () => {
	const [isCopied, setIsCopied] = useState<boolean>(false);
	const bgRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(bgRef.current, { }, {  });
		}, bgRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={bgRef}
			className='bg-contactDay dark:bg-contactNight min-h-screen flex items-center -z-40 text-white lg:grid lg:grid-cols-3'>
			<Sidebar />
			<div className='bg-black bg-opacity-70 border-[3px] border-[#077] flex flex-col justify-around px-5 w-10/12 max-w-[430px] h-[calc(100vh-350px)] mx-auto rounded-lg shadow-2xl -mt-72 md:-mt-64 lg:-mt-40 lg:col-span-2'>
				<h1 className=' text-center text-3xl font-medium'>Let's talk!</h1>
				<p className='text-center leading-relaxed text-lg font-medium'>
					You can reach me through an email :
					<a
						className='underline underline-offset-4 block text-BrightBlue'
						href='mailto:jaacielbris23@gmail.com?subject=Hello%20Jaaciel!'>
						{' '}
						jaacielbris23@gmail.com
					</a>
				</p>
				<button
					className='flex items-center mx-auto justify-center rounded-lg bg-black px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]'
					onClick={() => {
						navigator.clipboard.writeText('jaacielbris23@gmail.com');
						setIsCopied(true);
					}}>
					{!isCopied ? 'Copy email' : 'Copied!'}
				</button>
			</div>
		</div>
	);
};
