/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

type DisplayType = 'secondary' | 'info' | 'warning' | 'danger' | 'success';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	closeButtonProps?: React.HTMLAttributes<HTMLButtonElement>;
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
	const content = (
		<>
			<span className="label-item label-item-expand">{children}</span>

			{closeButtonProps && (
				<span className="label-item label-item-after">
					<button
						{...closeButtonProps}
						className="close"
						type="button"
					>
						{closeButtonProps.children}
					</button>
				</span>
			)}
		</>
	);

	const attrs = {
		...otherProps,
		className: classNames('label', className, {
			'label-dismissible': closeButtonProps,
			'label-lg': large,
			[`label-${displayType}`]: displayType,
		}),
		href,
	};

	if (!href) {
		delete attrs.href;
	}

	return React.createElement(href ? 'a' : 'span', attrs, content);
};

export default ClayLabel;
