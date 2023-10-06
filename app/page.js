import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex justify-center items-center min-h-screen bg-black">
			<Head>
				<title>Arc9 Consult Ltd.</title>
			</Head>
			<div className="text-center justify-center items-center">
				<Image
					src={'/logo.png'}
					width={400}
					height={100}
					alt="logo"
				/>
				<h1 className="text-2xl font-bold text-gray-300 mt-3">
					Coming soon...
				</h1>
				<p className="mt-4 text-gray-200">
					We're working on our website, stay tuned!
				</p>
				<div className="bg-slate-100 px-4 py-2 w-[45%] mx-auto flex justify-center items-center rounded-md mt-5 shadow-md text-black font-bold">
					<Image
						src={'/whatsapp.png'}
						width={30}
						height={200}
						alt=""
						className="mr-2"
					/>
					<a href="https://wa.me/message/M36RA7X7KLK3A1">
						Talk to Us
					</a>
				</div>
			</div>
		</div>
	);
}
