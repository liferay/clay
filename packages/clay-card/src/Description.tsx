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
	 * Flag to indicate if href will be disabled.
	 */
	disabled?: boolean;

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
	subtitle: 'p',
	text: 'p',
	title: 'h3',
} as const;

const ClayCardDescription: React.FunctionComponent<ICardDescriptionProps> = ({
	children,
	className,
	disabled,
	displayType,
	href,
	truncate = true,
	...otherProps
}: ICardDescriptionProps) => {
	const OuterTag = CARD_TYPE_ELEMENTS[displayType];
	const InnerTag = href && !disabled ? 'a' : 'span';

	return (
		<OuterTag
			className={classNames(className, `card-${displayType}`)}
			title={children ? children.toString() : undefined}
			{...otherProps}
		>
			{truncate ? (
				<span className="text-truncate-inline">
					<InnerTag className="text-truncate" href={href}>
						{children}
					</InnerTag>
				</span>
			) : (
				children
			)}
		</OuterTag>
	);
};

export default ClayCardDescription;
