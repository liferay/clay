/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import Icon from '@clayui/icon';

type DisplayType = 'secondary' | 'info' | 'warning' | 'danger' | 'success';

interface Props
	extends React.BaseHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
	closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	displayType?: DisplayType;
	large?: boolean;
}

const ClayLabel: React.FunctionComponent<Props> = ({
	children,
	className,
	closeButtonProps,
	displayType = 'secondary',
	href,
	large = false,
	...otherProps
}) => {
	const TagName = href ? 'a' : 'span';

	return (
		<TagName
			{...otherProps}
			className={classNames('label', className, {
				'label-dismissible': closeButtonProps,
				'label-lg': large,
				[`label-${displayType}`]: displayType,
			})}
			href={href}
		>
			<span className="label-item label-item-expand">{children}</span>

			{closeButtonProps && (
				<span className="label-item label-item-after">
					<button
						{...closeButtonProps}
						className="close"
						type="button"
					>
						<Icon symbol="times" />
					</button>
				</span>
			)}
		</TagName>
	);
};

export default ClayLabel;
