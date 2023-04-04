/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	/**
	 * Message the user will see describing what they can do when on this screen
	 */
	description?: string;

	/**
	 * HTMLImage element attributes to add to the image within the component
	 */
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;

	/**
	 * Source of the image to signify the state
	 */
	imgSrc?: string;

	/**
	 * Indicates empty state should be a small variant.
	 */
	small?: boolean;

	/**
	 * Title of the message highlighting the description
	 */
	title?: string | null;
}

const defaultTile = 'No results found';

const ClayEmptyState = ({
	children,
	className,
	description = 'Sorry, there are no results found',
	imgProps,
	imgSrc,
	small,
	title = defaultTile,
	...otherProps
}: IProps) => {
	const hasImg = imgSrc || imgProps;

	return (
		<div
			className={classNames(className, 'c-empty-state', {
				'c-empty-state-animation': hasImg,
				'c-empty-state-sm': small,
			})}
			{...otherProps}
		>
			{hasImg && (
				<div className="c-empty-state-image">
					<div className="c-empty-state-aspect-ratio">
						<img
							alt=""
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
					<span className="text-truncate">
						{title || defaultTile}
					</span>
				</span>
			</div>

			<div className="c-empty-state-text">{description}</div>

			{children && <div className="c-empty-state-footer">{children}</div>}
		</div>
	);
};

export default ClayEmptyState;
