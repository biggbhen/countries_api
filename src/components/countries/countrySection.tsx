'use client';
import React, { useState } from 'react';
import Filter from '../filter/filter';
import Card from './card';
import { FeatureSelector } from '../feature/selector';

import { useSelector } from 'react-redux';

type Props = {};

const CountrySection = (props: Props) => {
	const selector = useSelector(FeatureSelector);

	const [data, setData] = useState<any>([]);
	const [filterText, setFilterText] = useState<string>('');
	const [searchText, setSearchText] = useState<string>('');

	const getFilterText = (value: string) => setFilterText(value);
	const getSearchText = (value: string) => setSearchText(value);

	React.useEffect(() => {
		if (selector?.countries.length > 0) {
			setData([...selector.countries]);
		}
		// eslint-disable-next-line
	}, [selector?.countries]);

	React.useEffect(() => {
		if (filterText !== 'All') {
			setData(
				[...selector.countries].filter((item: any) => {
					const regex = new RegExp(filterText, 'gi');
					return item.name.match(regex) || item.region.match(regex);
				})
			);
		} else {
			setData([...selector.countries]);
		}

		if (searchText !== '' && data.length > 0) {
			setData(
				data.filter((item: any) =>
					item.name.toLowerCase().includes(searchText.toLowerCase())
				)
			);
		}
		// eslint-disable-next-line
	}, [filterText, searchText]);

	return (
		<div>
			<Filter getFilterText={getFilterText} getSearchText={getSearchText} />
			{selector.loading === true ? (
				<div className='flex justify-center min-h-[50vh] items-center'>
					<span className='loader'></span>
				</div>
			) : data.length > 0 ? (
				<div className='mt-8 grid lsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 py-[1rem] px-[2rem] md:px-[3rem]'>
					{data.map((item: any, ind: React.Key) => (
						<Card key={ind} item={item} />
					))}
				</div>
			) : selector.loading === false && !selector?.countries ? (
				<h2>type in a valid search</h2>
			) : null}
		</div>
	);
};

export default CountrySection;
