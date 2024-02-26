import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppHeader from '../components/header';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Providers from '@/components/feature/Provider';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Countries Api',
	description: 'Developed by Benjamin',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='dark:bg-[#202c37] bg-[#fafafa]'>
				<Providers>
					<AppHeader />
					{children}
				</Providers>
			</body>
		</html>
	);
}
