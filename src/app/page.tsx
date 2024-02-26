'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FeatureSelector } from '@/components/feature/selector';
import { getAllCountries } from '@/components/feature/feature';
import { AppDispatch } from '@/components/feature/store';
import CountrySection from '@/components/countries/countrySection';

export default function Home() {
	const selector = useSelector(FeatureSelector);
	const dispatch = useDispatch<AppDispatch>();

	// fetch all countries
	React.useEffect(() => {
		dispatch(getAllCountries());
		// eslint-disable-next-line
	}, []);

	return (
		<main className='pt-[3rem]'>
			<CountrySection />
		</main>
	);
}
