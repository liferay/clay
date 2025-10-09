/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext, useState} from 'react';

import ClayDataProvider, {useResource} from '../src';
import {FetchPolicy} from '../src/useResource';

export default {
	parameters: {
		chromatic: {disableSnapshot: true},
	},
	title: 'Design System/Components/DataProvider',
};

export const PollingExample = (args: any) => (
	<ClayDataProvider
		link="https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/trades"
		notifyOnNetworkStatusChange
		pollInterval={args.pollInterval}
		variables={{limit: 10}}
	>
		{(props) => (
			<div className="container">
				<div className="autofit-padded-no-gutters-x autofit-row">
					<div className="autofit-col">
						<h3>
							{'Coinbase Trades '}
							<small>
								{props.networkStatus === 1 && 'Loading'}
								{props.networkStatus === 2 && 'Refetch'}
								{props.networkStatus === 3 && 'Polling'}
								{props.networkStatus === 4 && 'Ready'}
								{props.networkStatus === 5 && 'Error'}
							</small>
						</h3>
					</div>
					<div className="autofit-col">
						<button
							className="btn"
							onClick={() => props.refetch()}
							type="button"
						>
							Refetch
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5">
						<p className="text-truncate-inline">
							<small>
								{`The polling is enabled with an interval of
								5s, modify the values through the Storybook
								knobs. This markup is for testing purposes
								only with the ClayDataProvider component.`}
							</small>
						</p>
					</div>
				</div>
				<ul className="list-group">
					<li className="list-group-item list-group-item-flex">
						<div className="autofit-col" />
						<div className="autofit-col">
							<p className="list-group-title">Trade Size</p>
						</div>
						<div className="autofit-col">
							<p className="list-group-title">Price (USD)</p>
						</div>
						<div className="autofit-col">
							<p className="list-group-title">Time (ISO)</p>
						</div>
					</li>
					{props.networkStatus === 1 && (
						<li className="disabled list-group-item list-group-item-flex">
							Loading...
						</li>
					)}
					{props.error && (
						<li className="disabled list-group-item list-group-item-flex">
							Error
						</li>
					)}
					{props.data &&
						!props.error &&
						props.data.map((item: any) => (
							<li
								className="list-group-item list-group-item-flex"
								key={item.trade_id}
							>
								<div className="autofit-col">{item.side}</div>
								<div className="autofit-col">{item.size}</div>
								<div className="autofit-col">{item.price}</div>
								<div className="autofit-col">{item.time}</div>
							</li>
						))}
				</ul>
			</div>
		)}
	</ClayDataProvider>
);

PollingExample.args = {
	pollInterval: 5000,
};

const Store = React.createContext({});

Store.displayName = 'DemoStoreContext';

export const VariableChange = () => {
	const [value, setValue] = useState<undefined | string>('');
	const store = useContext(Store);

	return (
		<div className="col-md-4">
			<ClayDataProvider
				fetchPolicy={FetchPolicy.CacheFirst}
				link="https://rickandmortyapi.com/api/character"
				notifyOnNetworkStatusChange
				storage={store}
				variables={{name: value}}
			>
				{({data, error, networkStatus, refetch}) => {
					return (
						<>
							<div className="autofit-padded-no-gutters-x autofit-row">
								<div className="autofit-col">
									<h3>
										{'The Rick and Morty '}
										<small>
											{networkStatus === 1 && 'Loading'}
											{networkStatus === 2 && 'Refetch'}
											{networkStatus === 3 && 'Polling'}
											{networkStatus === 4 && 'Ready'}
											{networkStatus === 5 && 'Error'}
										</small>
									</h3>
								</div>
								<div className="autofit-col">
									<button
										className="btn"
										onClick={() => refetch()}
										type="button"
									>
										Refetch
									</button>
								</div>
							</div>
							<div className="sheet">
								<div className="form-group">
									<label htmlFor="searchCharacterInput">
										Search Character
									</label>
									<input
										className="form-control"
										id="searchCharacterInput"
										onChange={(event: any) =>
											setValue(event.target.value)
										}
										placeholder="Search character"
										type="text"
										value={value}
									/>
								</div>
								<ul className="list-group">
									{networkStatus === 1 && (
										<li className="disabled list-group-item list-group-item-flex">
											Loading...
										</li>
									)}
									{error && (
										<li className="disabled list-group-item list-group-item-flex">
											Result is not found
										</li>
									)}
									{!error &&
										data &&
										data.results &&
										data.results.map((item: any) => (
											<li
												className="list-group-item list-group-item-flex"
												key={item.id}
											>
												<div className="autofit-col autofit-col-expand">
													<p className="list-group-title text-truncate">
														Name
													</p>
													<p className="list-group-subtitle text-truncate">
														{item.name}
													</p>
												</div>
											</li>
										))}
								</ul>
							</div>
						</>
					);
				}}
			</ClayDataProvider>
		</div>
	);
};

export const PollingDisable = () => {
	const [poll, setPoll] = useState(false);

	useResource({
		link: 'https://rickandmortyapi.com/api/character',
		pollInterval: poll ? 1000 : 0,
		variables: {limit: 10},
	});

	return (
		<div className="pb-4 sheet">
			<h3>{`Polling  ${poll ? 'enable' : 'disable'}`}</h3>
			<div className="row">
				<div className="col-md-5">
					<p>Open your console to see the network tab.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-5">
					<button
						className="btn btn-primary"
						onClick={() => setPoll(!poll)}
					>
						Toggle Poll
					</button>
				</div>
			</div>
		</div>
	);
};

export const CustomFetcher = () => {
	const customFetcher = (url: string, options?: RequestInit | undefined) =>
		fetch(url, {...options, headers: {'x-clay': 'Clay'}}).then((res) =>
			res.json()
		);

	useResource({
		fetch: customFetcher,
		link: 'https://rickandmortyapi.com/api/character/',
		variables: {limit: 10},
	});

	return (
		<div className="pb-4 sheet">
			<h3>Custom Fetcher</h3>
			<div className="row">
				<div className="col-md-5">
					<p>Open your console to see the network tab.</p>
				</div>
			</div>
		</div>
	);
};
