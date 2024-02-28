'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {};

const Back = (props: Props) => {
	return (
		<div className='px-[2rem] md:px-[3rem] mt-8'>
			<div
				className='px-[20px]  dark:bg-[#2b3945] bg-white shadow-md dark:text-white text-[#111517] text-[0.9rem] py-[10px] w-max cursor-pointer'
				onClick={() => window.history.back()}>
				<FontAwesomeIcon icon={faArrowLeft} className='mr-[10px]' /> Back
			</div>
		</div>
	);
};

export default Back;
