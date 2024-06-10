'use client';

import { useState } from 'react';

import Lottie from 'react-lottie';

import MagicButton from './magic-button';

import { CopyIcon } from 'lucide-react';

import animationData from '@/config/confetti.json';

const emailAddress = 'jaacielbris23@gmail.com';

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

	const handleCopy = async () => {
		const setCopiedTemporarily = () => {
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 3000);
		};

		if (!!navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(emailAddress);
				setCopiedTemporarily();
			} catch (error) {
				console.error('Failed to copy text: ', error);
			}
			return;
		}

		// Fallback to execCommand for older browsers
		const textArea = document.createElement('textarea');
		textArea.value = emailAddress;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
		setCopiedTemporarily();
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
