/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import React from 'react';

type CardDescriptionDisplayType = 'text' | 'title' | 'subtitle';

interface ICardDescriptionProps
	extends React.HTMLAttributes<
		HTMLAnchorElement | HTMLDivElement | HTMLSpanElement
	> {
	/**
	 * Type of description that can be applied for a text.
	 */
	displayType: CardDescriptionDisplayType;

	/**
	 * Path or URL
	 */
	href?: string;

	/**
	 * Truncates the text inside a description.
	 */
	truncate?: boolean;
}

const ClayCardDescription: React.FunctionComponent<ICardDescriptionProps> = ({
	children,
	className,
	displayType,
	href,
	truncate = true,
	...otherProps
}: ICardDescriptionProps) => {
	const {interactive} = React.useContext(Context);

	const interactiveTag = interactive ? 'span' : 'div';

	const TagName = href ? 'a' : interactiveTag;

	return (
		<TagName
			className={classNames(className, `card-${displayType}`, {
				'text-truncate': truncate,
			})}
			href={href}
			{...otherProps}
		>
			{children}
		</TagName>
	);
};

export default ClayCardDescription;
