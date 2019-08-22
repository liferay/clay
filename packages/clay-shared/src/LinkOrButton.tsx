/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import React from 'react';

interface IProps {
	buttonDisplayType?: React.ComponentProps<typeof ClayButton>['displayType'];
	buttonType?: React.ComponentProps<typeof ClayButton>['type'];
	linkDisplayType?: React.ComponentProps<typeof ClayLink>['displayType'];
	onClick?: React.ComponentProps<typeof ClayButton>['onClick'];
	[propName: string]: any;
}

export const LinkOrButton: React.FunctionComponent<IProps> = ({
	buttonDisplayType,
	buttonType,
	href,
	linkDisplayType,
	onClick,
	...otherProps
}) => {
	if (href) {
		return (
			<ClayLink
				displayType={linkDisplayType}
				href={href}
				{...otherProps}
			/>
		);
	}

	return (
		<ClayButton
			displayType={buttonDisplayType}
			onClick={onClick}
			type={buttonType}
			{...otherProps}
		/>
	);
};
