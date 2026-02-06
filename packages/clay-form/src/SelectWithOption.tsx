/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import Select from './Select';

interface IProps extends React.ComponentProps<typeof Select> {

	/**
	 * Options of the select.
	 */
	options: Array<
		(
			| React.ComponentProps<typeof Select.Option>
			| React.ComponentProps<typeof Select.OptGroup>
		) & {
			options?: Array<React.ComponentProps<typeof Select.Option>>;
			type?: 'group';
		}
	>;
}

function ClaySelectWithOption({options = [], ...otherProps}: IProps) {
	return (
		<Select {...otherProps}>
			{options.map((option, index) => {
				if (option.type === 'group') {
					return (
						<Select.OptGroup key={index} label={option.label}>
							{option.options &&
								option.options.map((item, j) => (
									<Select.Option {...item} key={j} />
								))}
						</Select.OptGroup>
					);
				}

				return <Select.Option {...option} key={index} />;
			})}
		</Select>
	);
}

export default ClaySelectWithOption;
