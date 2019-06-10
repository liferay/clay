/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const DropDownGroup: React.FunctionComponent<{
	/**
	 * Value provided is a display component that is a header for the items in the group.
	 */
	header?: string;
}> = ({children, header}) => {
	return (
		<>
			{header && (
				<li className="dropdown-subheader" role="presentation">
					{header}
				</li>
			)}

			{children}
		</>
	);
};

export default DropDownGroup;
