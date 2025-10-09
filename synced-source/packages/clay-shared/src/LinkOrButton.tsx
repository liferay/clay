/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import React from 'react';

interface IProps {
	buttonDisplayType?: React.ComponentProps<typeof ClayButton>['displayType'];
	buttonType?: React.ComponentProps<typeof ClayButton>['type'];
	linkDisplayType?: React.ComponentProps<typeof ClayLink>['displayType'];
	onClick?: React.HTMLAttributes<
		HTMLAnchorElement & HTMLButtonElement
	>['onClick'];
	[propName: string]: any;
}

const LinkOrButton = React.forwardRef<any, IProps>(
	(
		{
			buttonDisplayType,
			buttonType,
			href,
			linkDisplayType,
			onClick,
			...otherProps
		},
		ref
	) => {
		if (href) {
			return (
				<ClayLink
					{...otherProps}
					displayType={linkDisplayType}
					href={href}
					onClick={onClick}
					ref={ref}
				/>
			);
		}

		return (
			<ClayButton
				{...otherProps}
				displayType={buttonDisplayType}
				onClick={onClick}
				ref={ref}
				type={buttonType}
			/>
		);
	}
);

LinkOrButton.displayName = 'ClayLinkOrButton';

export {LinkOrButton};
