/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

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
	 * Define the name of the container element.
	 */
	tag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	/**
	 * Truncates the text inside a description.
	 */
	truncate?: boolean;
}

const ClayCardDescription: React.FunctionComponent<ICardDescriptionProps> = ({
	children,
	className,
	disabled,
	displayType,
	href,
	tag: Tag = 'p',
	truncate = true,
	...otherProps
}: ICardDescriptionProps) => {
	const InnerTag = href && !disabled ? 'a' : 'span';

	return (
		<Tag
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
		</Tag>
	);
};

export default ClayCardDescription;
