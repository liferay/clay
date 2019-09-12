/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {TDelimiter} from './types';
interface IRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
	/**
	 * Forces the active state inside the row.
	 */
	active?: boolean;

	/**
	 * Applies a divider style inside the row.
	 */
	divider?: boolean;

	/**
	 * This property can be added to the "new" first
	 * or last ClayTable.Row to maintain table styles on the top and bottom sides.
	 */
	rowDelimiter?: TDelimiter;
}

const ClayTableRow: React.FunctionComponent<IRowProps> = ({
	active = false,
	children,
	className,
	divider = false,
	rowDelimiter,
	...otherProps
}: IRowProps) => {
	return (
		<tr
			{...otherProps}
			className={classNames(className, {
				'table-active': active,
				'table-divider': divider,
				[`table-row-${rowDelimiter}`]: rowDelimiter,
			})}
		>
			{children}
		</tr>
	);
};

export default ClayTableRow;
