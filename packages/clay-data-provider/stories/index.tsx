/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayDataProvider from '../src';
import React, {useContext, useState} from 'react';
import {FetchPolicy} from '../src/types';
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const Store = React.createContext({});

const ClayDataProviderWithVariablesAndStorage = () => {
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
				{({networkStatus, refetch, data, error}) => {
					return (
						<>
							<div className="autofit-row autofit-padded-no-gutters-x">
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
									<input
										className="form-control"
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
										<li className="list-group-item list-group-item-flex disabled">
											Loading...
										</li>
									)}
									{error && (
										<li className="list-group-item list-group-item-flex disabled">
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

storiesOf('ClayDataProvider', module)
	.add('with polling', () => (
		<ClayDataProvider
			link="https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/trades"
			notifyOnNetworkStatusChange
			pollInterval={number('Polling Interval', 5000)}
			variables={{limit: 10}}
		>
			{props => (
				<div className="container">
					<div className="autofit-row autofit-padded-no-gutters-x">
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
									The polling is enabled with an interval of
									5s, modify the values through the Storybook
									knobs. This markup is for testing purposes
									only with the ClayDataProvider component.
								</small>
							</p>
						</div>
					</div>
					<ul className="list-group">
						<li className="list-group-item list-group-item-flex">
							<div className="autofit-col" />
							<div className="autofit-col">
								<p className="list-group-title">
									{'Trade Size'}
								</p>
							</div>
							<div className="autofit-col">
								<p className="list-group-title">
									{'Price (USD)'}
								</p>
							</div>
							<div className="autofit-col">
								<p className="list-group-title">
									{'Time (ISO)'}
								</p>
							</div>
						</li>
						{props.networkStatus === 1 && (
							<li className="list-group-item list-group-item-flex disabled">
								Loading...
							</li>
						)}
						{props.error && (
							<li className="list-group-item list-group-item-flex disabled">
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
									<div className="autofit-col">
										{item.side}
									</div>
									<div className="autofit-col">
										{item.size}
									</div>
									<div className="autofit-col">
										{item.price}
									</div>
									<div className="autofit-col">
										{item.time}
									</div>
								</li>
							))}
					</ul>
				</div>
			)}
		</ClayDataProvider>
	))
	.add('with variables change and storage', () => (
		<ClayDataProviderWithVariablesAndStorage />
	));
