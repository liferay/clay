/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Message the user will see describing what they can do when on this screen
	 */
	description?: string;

	/**
	 *
	 */
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;

	/**
	 * Source of the image to signify the state
	 */
	imgSrc?: string;

	/**
	 * Title of the message highlighting the description
	 */
	title?: string;
}

const ClayEmptyState: React.FunctionComponent<IProps> = ({
	children,
	className,
	description = 'Sorry, there are no results found',
	imgProps,
	imgSrc,
	title = 'No results found',
	...otherProps
}) => {
	const hasImg = imgSrc || imgProps;

	return (
		<div
			className={classNames(className, 'c-empty-state', {
				'c-empty-state-animation': hasImg,
			})}
			{...otherProps}
		>
			{hasImg && (
				<div className="c-empty-state-image">
					<div className="c-empty-state-aspect-ratio">
						<img
							alt="empty-state-image"
							className={classNames(
								'aspect-ratio-item aspect-ratio-item-fluid',
								imgProps && imgProps.className
							)}
							src={imgSrc}
							{...imgProps}
						/>
					</div>
				</div>
			)}

			<div className="c-empty-state-title">
				<span className="text-truncate-inline">
					<span className="text-truncate">{title}</span>
				</span>
			</div>

			<div className="c-empty-state-text">{description}</div>

			{children && <div className="c-empty-state-footer">{children}</div>}
		</div>
	);
};

export default ClayEmptyState;
