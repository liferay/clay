/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import ClayCard, {ClayCardWithInfo} from '@clayui/card';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayInput} from '@clayui/form';
import ClayManagementToolbar from '@clayui/management-toolbar';
import React, {useState} from 'react';

export default () => {
	const [value, setValue] = useState('');

	const dogNames: Array<[string, number]> = [
		['Bailey', 1],
		['Max', 2],
		['Charlie', 3],
		['Buddy', 4],
		['Rocky', 5],
		['Jake', 6],
		['Jack', 7],
		['Sadie', 8],
		['Toby', 9],
		['Chloe', 10],
		['Cody', 11],
		['Buster', 12],
	];

	return (
		<div>
			<ClayManagementToolbar>
				<ClayManagementToolbar.Search onlySearch>
					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayInput
								aria-label="Search"
								className="form-control input-group-inset input-group-inset-after"
								onChange={event => setValue(event.target.value)}
								type="text"
								value={value}
							/>
							<ClayInput.GroupInsetItem after tag="span">
								<ClayButtonWithIcon
									displayType="unstyled"
									spritemap={spritemap}
									symbol="search"
									type="submit"
								/>
							</ClayInput.GroupInsetItem>
						</ClayInput.GroupItem>
					</ClayInput.Group>
				</ClayManagementToolbar.Search>
			</ClayManagementToolbar>

			<div className="container-fluid container-fluid-max-xl container-view">
				<ClayCard.Group label="Good Boys">
					{dogNames
						.filter(([name]) =>
							name.toLowerCase().match(value.toLowerCase())
						)
						.map(([doggoName, doggoId]) => (
							<ClayCardWithInfo
								description="the goodest boy"
								href={`https://placedog.net/1000?id=${doggoId}`}
								imgProps={{
									src: `https://placedog.net/640/480?id=${doggoId}`,
								}}
								key={doggoId}
								spritemap={spritemap}
								title={`${doggoName}.jpg`}
							/>
						))}
				</ClayCard.Group>
			</div>
		</div>
	);
};
