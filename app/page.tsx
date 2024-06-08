'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card";

const Page = () => {
	const router = useRouter();

	const handleSignIn = () => {
		router.push('/sign-in');
	};

	const handleSignUp = () => {
		router.push('/sign-up');
	};
	return (
		<div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
			<main className="flex-1">
				<section className="w-full py-24 md:py-32 lg:py-40">
					<div className="container px-4 md:px-6 lg:px-8">
						<div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
							<div className="space-y-4 md:space-y-6 lg:space-y-8">
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
									The Minimalist Wallet
								</h1>
								<p className="text-lg text-gray-400 md:text-xl lg:text-2xl">
									A sleek and modern wallet that keeps your essentials organized and accessible.
								</p>
								<Link
									href="#"
									className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Get Started
								</Link>

								<button onClick={handleSignIn} className={styles.button} style={{ fontWeight: '600', padding: '10px 30px', fontSize: '1rem' }}>
									Sign In
								</button>
							</div>
							<img
								src="/placeholder.svg"
								width="550"
								height="550"
								alt="Wallet"
								className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-16 lg:py-20 bg-gray-900">
					<div className="container px-4 md:px-6 lg:px-8">
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
							<Card>
								<CardContent className="space-y-2">
									<CreditCardIcon className="h-8 w-8" />
									<h3 className="text-lg font-semibold">Slim Design</h3>
									<p className="text-gray-400">
										Our wallet is designed to be slim and compact, fitting comfortably in your pocket.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="space-y-2">
									<LockIcon className="h-8 w-8" />
									<h3 className="text-lg font-semibold">Secure Storage</h3>
									<p className="text-gray-400">Keep your cards and cash safe with our durable and protective design.</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="space-y-2">
									<AccessibilityIcon className="h-8 w-8" />
									<h3 className="text-lg font-semibold">Easy Access</h3>
									<p className="text-gray-400">Quickly access your essentials with our thoughtful organization.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-gray-900 py-6 text-center text-sm text-gray-400">
				<div className="container px-4 md:px-6 lg:px-8">&copy; 2024 The Minimalist Wallet. All rights reserved.</div>
			</footer>
		</div>
	)
}

function AccessibilityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="16" cy="4" r="1" />
			<path d="m18 19 1-7-6 1" />
			<path d="m5 8 3-3 5.5 3-2.36 3.5" />
			<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
			<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
		</svg>
	)
}


function CreditCardIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="14" x="2" y="5" rx="2" />
			<line x1="2" x2="22" y1="10" y2="10" />
		</svg>
	)
}


function LockIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	)
}