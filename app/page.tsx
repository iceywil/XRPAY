'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
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
									XRPAY
								</h1>
								<p className="text-lg text-gray-400 md:text-xl lg:text-2xl">
									Smoothest way to use the XRP Ledger Blockchain
								</p>
								<a
									href="sign-in"
									className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								>
									Dive In
								</a>
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
							<div className="bg-gray-800 rounded-lg p-6 space-y-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
									<path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348-8.676 4.5 4.5 0 015.698 5.48 8.25 8.25 0 01-15.046 3.196z"
										clipRule="evenodd"
									/>
								</svg>
								<h3 className="text-lg font-semibold">Slim Design</h3>
								<p className="text-gray-400">
									Our wallet is designed to be slim and compact, fitting comfortably in your pocket.
								</p>
							</div>
							<div className="bg-gray-800 rounded-lg p-6 space-y-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
									<path
										fillRule="evenodd"
										d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3c0-2.09-1.66-3.75-3.75-3.75s-3.75 1.66-3.75 3.75v3h7.5z"
										clipRule="evenodd"
									/>
								</svg>
								<h3 className="text-lg font-semibold">Secure Storage</h3>
								<p className="text-gray-400">Keep your cards and cash safe with our durable and protective design.</p>
							</div>
							<div className="bg-gray-800 rounded-lg p-6 space-y-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 6a3 3 0 00-3 3v4.5a.75.75 0 001.5 0V9a1.5 1.5 0 013 0v4.5a.75.75 0 001.5 0V9a3 3 0 00-3-3z"
										clipRule="evenodd"
									/>
								</svg>
								<h3 className="text-lg font-semibold">Easy Access</h3>
								<p className="text-gray-400">Quickly access your essentials with our thoughtful organization.</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-gray-900 py-6 text-center text-sm text-gray-400">
				<div className="container px-4 md:px-6 lg:px-8">&copy; 2024 The XRPay Wallet. All rights reserved.</div>
			</footer>
		</div>
	)
}
