/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useMemo} from 'react';

type Props = {
	/**
	 * Group content.
	 */
	children?: React.ReactNode;

	/**
	 * Value provided is a display component that is a header for the items in the group.
	 */
	header?: string;

	/**
	 * ARIA to define semantic meaning to content.
	 */
	role?: string;
};

let counter = 0;

const ClayDropDownGroup = ({children, header, role = 'group'}: Props) => {
	const ariaLabel = useMemo(() => {
		counter++;

		return `clay-dropdown-menu-group-${counter}`;
	}, []);

	return (
		<>
			{header && (
				<li
					aria-hidden="true"
					className="dropdown-subheader"
					id={ariaLabel}
					role="presentation"
				>
					{header}
				</li>
			)}

			<li role="presentation">
				<ul
					aria-labelledby={ariaLabel}
					className="list-unstyled"
					role={role}
				>
					{children}
				</ul>
			</li>
		</>
	);
};

export default ClayDropDownGroup;
