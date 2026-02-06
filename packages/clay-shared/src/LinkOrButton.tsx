/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
