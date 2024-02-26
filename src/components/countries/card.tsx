import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ item }: { item: any }) => {
	const { flag, name, population, region, capital } = item;
	return (
		<div className='bg-[#ffffff] text-[#111517] dark:bg-[#2b3945] dark:text-white shadow-md rounded-[6px] cursor-pointer xxsm:max-w-[100%] xsm:max-w-[250px]  max-w-[210px] xlg:max-w-[230px] w-[100%] mx-auto'>
			<Link
				href={`/country/${name}`}
				className='text-[#111517] dark:text-white'>
				<div className=' h-[7.5rem] relative'>
					<Image src={flag} alt='flag' layout='fill' objectFit='cover' />
				</div>
				<div className='p-[10px]'>
					<h2 className='text-sm mb-2 text-[#111517] dark:text-white'>
						{item.name}
					</h2>
					<p className='text-xs mb-1 text-[#111517] dark:text-white'>
						population: {population}
					</p>
					<p className='text-xs mb-1 text-[#111517] dark:text-white'>
						Region: {region}
					</p>
					<p className='text-xs mb-1 text-[#111517] dark:text-white'>
						Capital: {capital}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
