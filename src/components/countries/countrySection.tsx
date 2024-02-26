import React, { useState } from 'react';
import Filter from '../filter/filter';
import Card from './card';
import { FeatureSelector } from '../feature/selector';
import { AppDispatch } from '../feature/store';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const CountrySection = (props: Props) => {
	const selector = useSelector(FeatureSelector);
	const dispatch = useDispatch<AppDispatch>();

	const [data, setData] = useState<any>([]);

	React.useEffect(() => {
		if (selector?.countries.length > 0) {
			setData([...selector.countries]);
		}
		// eslint-disable-next-line
	}, [selector?.countries]);

	return (
		<div>
			<Filter />
			<div className='mt-8 grid lsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 py-[1rem] px-[2rem] md:px-[3rem]'>
				{selector.loading === true ? (
					<h2>loading</h2>
				) : data.length > 0 ? (
					data.map((item: any, ind: React.Key) => (
						<Card key={ind} item={item} />
					))
				) : selector.loading === false && !selector?.countries ? (
					<h2>type in a valid search</h2>
				) : null}
			</div>
		</div>
	);
};

export default CountrySection;
