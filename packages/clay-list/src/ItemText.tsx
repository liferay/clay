/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
	subtext?: boolean;
}
const ItemText: React.FunctionComponent<Props> = ({
	children,
	className,
	subtext,
	...otherProps
}) => {
	return (
		<p
			{...otherProps}
			className={classNames(className, {
				'list-group-subtext': subtext,
				'list-group-text': !subtext,
			})}
		>
			{children}
		</p>
	);
};

export default ItemText;
