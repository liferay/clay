/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

type CardDescriptionDisplayType = 'text' | 'title' | 'subtitle';

interface ICardDescriptionProps
	extends React.HTMLAttributes<
		HTMLHeadingElement | HTMLDivElement | HTMLSpanElement
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

const CARD_TYPE_ELEMENTS = {
	subtitle: 'span',
	text: 'div',
	title: 'h3',
};

const ClayCardDescription: React.FunctionComponent<ICardDescriptionProps> = ({
	children,
	className,
	displayType,
	href,
	truncate = true,
	...otherProps
}: ICardDescriptionProps) => {
	const OuterTag = CARD_TYPE_ELEMENTS[displayType] as ('span' | 'div' | 'h3');
	const InnerTag = href ? 'a' : 'span';

	return (
		<OuterTag
			className={classNames(className, `card-${displayType}`)}
			title={children ? children.toString() : undefined}
			{...otherProps}
		>
			<span className={truncate ? 'text-truncate-inline' : ''}>
				<InnerTag
					className={truncate ? 'text-truncate' : ''}
					href={href}
				>
					{children}
				</InnerTag>
			</span>
		</OuterTag>
	);
};

export default ClayCardDescription;
