/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
	/**
	 * Flag to indicate if content should be styled as subtext.
	 */
	subtext?: boolean;
}
const ItemText: React.FunctionComponent<IProps> = ({
	children,
	className,
	subtext,
	...otherProps
}: IProps) => {
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
