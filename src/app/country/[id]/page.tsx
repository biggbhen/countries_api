'use client';
import Back from '@/components/back';
import { getSingleCountry } from '@/components/feature/feature';
import { FeatureSelector } from '@/components/feature/selector';
import { AppDispatch } from '@/components/feature/store';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const CountryDetails = (props: Props) => {
	const params = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const selector = useSelector(FeatureSelector);

	React.useEffect(() => {
		dispatch(getSingleCountry({ name: params.id }));

		// eslint-disable-next-line
	}, [params.id]);

	return (
		<div className='py-[3rem]'>
			<Back />
			{selector?.country.length === 1 && (
				<section className='min-h-[400px] px-[2rem] md:px-[3rem] mt-8 grid grid-cols-2 md:gap-x-[5vw] lg:gap-x-[10vw] dark:text-white text-[#111517] text-[0.8rem] gap-y-4'>
					<div className='col-span-2 xmd:col-span-1 row-span-1 relative h-[300px]'>
						<Image
							src={selector?.country[0].flag}
							alt='flag'
							fill
							objectFit='center'
							priority
						/>
					</div>
					<div className='col-span-2 xmd:col-span-1 row-span-1'>
						<h2 className='text-lg mb-8'>{selector?.country[0].name}</h2>
						<div className='flex flex-col lxsm:flex-row gap-y-4 justify-between'>
							<div className=' flex flex-col gap-y-[5px]'>
								<p className='native-name'>
									<strong>Native Name:</strong>{' '}
									{selector?.country[0].nativeName}
								</p>
								<p className='single-population'>
									<strong>population:</strong> {selector?.country[0].population}
								</p>
								<p className='single-region'>
									<strong>Region:</strong> {selector?.country[0].region}
								</p>
								<p className='sub-region'>
									<strong>Region:</strong> {selector?.country[0].subregion}
								</p>
								<p className='single-capital'>
									<strong>Capital:</strong> {selector?.country[0].capital}
								</p>
							</div>
							<div className='flex flex-col gap-y-[5px]'>
								<p className='single-domain'>
									<strong>Top Level Domain:</strong>{' '}
									{selector?.country[0].topLevelDomain[0].slice(1)}
								</p>
								<p className='single-currencies'>
									<strong>Currencies:</strong>{' '}
									{selector?.country[0].currencies !== undefined
										? selector?.country[0].currencies.map(
												(currency: any) => currency.name
										  )
										: `No currency used`}
								</p>
								<p className='single-languages'>
									<strong>Languages:</strong>{' '}
									{selector?.country[0].languages.map(
										(language: any) => language.name
									)}
								</p>
							</div>
						</div>
						<div className='mt-8 flex flex-col lxsm:flex-row gap-y-4 gap-x-8 lxsm:items-center'>
							<p className='text-sm'>Border Countries:</p>
							<div className='flex gap-x-[5px]'>
								{selector?.country[0].borders !== undefined
									? selector?.country[0].borders.map(
											(border: any, ind: React.Key) => (
												<span
													key={ind}
													className='border dark:border-white border-[#111517] dark:text-white text-[#111517] p-[5px]'>
													{border}
												</span>
											)
									  )
									: `No neighbouring country`}
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
};

export default CountryDetails;
