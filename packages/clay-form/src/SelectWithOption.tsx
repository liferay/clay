/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

import Select from './Select';

interface IProps extends React.ComponentProps<typeof Select> {
	/**
	 * Options of the select.
	 */
	options: Array<React.ComponentProps<typeof Select.Option>>;
}

const ClaySelectWithOption: React.FunctionComponent<IProps> = ({
	options = [],
	...otherProps
}: IProps) => (
	<Select {...otherProps}>
		{options.map((option, index) => (
			<Select.Option {...option} key={index} />
		))}
	</Select>
);

export default ClaySelectWithOption;
