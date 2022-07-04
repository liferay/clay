/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import classNames from 'classnames';
import React from 'react';

const ClayPaginationBarDropDown = ({
	className,
	...otherProps
}: React.ComponentProps<typeof ClayDropDownWithItems>) => {
	return (
		<ClayDropDownWithItems
			className={classNames(className, 'pagination-items-per-page')}
			{...otherProps}
		/>
	);
};

export default ClayPaginationBarDropDown;
