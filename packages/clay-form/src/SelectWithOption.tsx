/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
			| React.ComponentProps<typeof Select.OptGroup>) & {
			options?: Array<React.ComponentProps<typeof Select.Option>>;
			type?: 'group';
		}
	>;
}

const ClaySelectWithOption: React.FunctionComponent<IProps> = ({
	options = [],
	...otherProps
}: IProps) => (
	<Select {...otherProps}>
		{options.map((option, index) => {
			if (option.type === 'group') {
				return (
					<Select.OptGroup label={option.label}>
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

export default ClaySelectWithOption;
