'use client';

import Lottie from 'react-lottie';
import MagicButton from './magic-button';
import { CopyIcon } from 'lucide-react';
import { useState } from 'react';

import animationData from '@/config/confetti.json';

export const CopyEmailAddress = () => {
	const [copied, setCopied] = useState(false);

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const handleCopy = () => {
		const text = 'jaacielbris23@gmail.com';
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<div className='mt-5 relative'>
			<div
				className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}>
				<Lottie
					options={defaultOptions}
					height={200}
					width={400}
				/>
			</div>

			<MagicButton
				title={copied ? 'Email is Copied!' : 'Copy my email address'}
				icon={<CopyIcon />}
				position='left'
				handleClick={handleCopy}
				otherClasses='!bg-[#161A31]'
			/>
		</div>
	);
};
