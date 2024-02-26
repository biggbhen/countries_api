'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

type Props = {};

const AppHeader = (props: Props) => {
	const [theme, setTheme] = useState('dark');

	const handleclick = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};
	return (
		<header className='flex items-center justify-between py-[0.7rem] px-[2rem] md:px-[3rem] bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-white fixed top-0 right-0 left-0 shadow-md z-50'>
			<h1>Where in the world?</h1>
			<button
				className='theme-btn flex text-[0.7rem] dark:bg-[#2b3945] dark:text-white  bg-[#ffffff] text-[#111517] cursor-pointer'
				onClick={handleclick}>
				{theme === 'dark' ? (
					<p className='flex items-center gap-x-[0.5rem]'>
						<FontAwesomeIcon icon={faMoon} />
						Dark Mode
					</p>
				) : (
					<p className='flex items-center gap-x-[0.5rem]'>
						<FontAwesomeIcon icon={faSun} />
						Light Mode
					</p>
				)}
			</button>
		</header>
	);
};

export default AppHeader;
