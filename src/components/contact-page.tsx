"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import {
	Check,
	Copy,
	LucideIcon,
	Mail,
	MapPin,
	Phone,
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	InstagramIcon,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

const APP_EMAIL = 'mail@example.com';
const APP_PHONE = '+92 300 1234567';
const APP_PHONE_2 = '+92 321 9876543';

export function ContactPage() {
	const socialLinks = [
		{
			icon: GithubIcon,
			href: 'https://github.com/sshahaider',
			label: 'GitHub',
		},
		{
			icon: TwitterIcon,
			href: 'https://twitter.com/sshahaider',
			label: 'Twitter',
		},
		{
			icon: LinkedinIcon,
			href: 'https://linkedin.com/in/sshahaider',
			label: 'LinkedIn',
		},
		{
			icon: InstagramIcon,
			href: 'https://instagram.com/sshahaider',
			label: 'Instagram',
		},
	];

	return (
		<div className="w-full">
			<div className="mx-auto h-full max-w-6xl">
				<div className="relative flex h-full min-h-[240px] items-center justify-center">
					<div className="relative z-1 space-y-6 text-center">
						<h2 className="text-center text-3xl font-bold md:text-4xl">Contact</h2>
						<p className="text-muted-foreground">Use the contact form or the channels listed in Resources.</p>
					</div>
				</div>
			</div>
		</div>
	);
}



type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-muted/40 flex items-center gap-x-3 border-b p-4">
				<props.icon className="text-muted-foreground size-5" strokeWidth={1} />
				<h2 className="font-heading text-lg font-medium tracking-wider">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t p-4">
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</div>
	);
}

type CopyButtonProps = ButtonProps & {
	test: string;
};

function CopyButton({
	className,
	variant = 'ghost',
	size = 'icon',
	test,
	...props
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(test);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={cn('disabled:opacity-100', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied || props.disabled}
			{...props}
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-3.5" />
			</div>
		</Button>
	);
}
