'use client';
import React, { useState } from 'react';

type Props = {};

const Filter = (props: Props) => {
	const [selectText, setSelectText] = useState('');
	const [modal, setModal] = useState(false);

	const handleModal = () => {
		if (modal) {
			setModal(false);
		} else {
			setModal(true);
		}
	};

	const innerOption = (e: { target: any; preventDefault: () => void }) => {
		e.preventDefault();
		setSelectText(e.target.innerText);
		setModal(false);
	};

	const filterItems = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

	return (
		<div>
			<form className='flex flex-col gap-y-4 my-[1.7rem] px-[3rem] sm:flex-row sm:justify-between sm:items-center'>
				<input
					type='text'
					name='text'
					placeholder='Search for a country'
					className='max-w-[18.5rem] w-[90%] py-[0.65rem] px-[2rem] text-[0.8rem] border-0 outline-0 rounded-[5px] bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-white shadow-md'
				/>
				<ul className='relative w-[8.5rem] rounded-[5px] bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-white shadow-md list-none text-[0.8rem] z-30'>
					<li
						className='py-[0.4rem] px-[0.8rem] cursor-pointer'
						onClick={handleModal}>
						{' '}
						{selectText !== '' ? selectText : 'Filter by region'}{' '}
					</li>
					<ul className='absolute w-[8.5rem] bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-white shadow-md list-none top-[100%] rounded-b-[5px]'>
						{modal &&
							filterItems.map((item, ind) => (
								<li
									className='cursor-pointer py-[0.4rem] px-[0.8rem] hover:bg-slate-300 border-t-[1px] border-t-[#D2D7DF]'
									value='America'
									onClick={innerOption}
									key={ind}>
									{item}
								</li>
							))}
					</ul>
				</ul>
			</form>
		</div>
	);
};

export default Filter;
