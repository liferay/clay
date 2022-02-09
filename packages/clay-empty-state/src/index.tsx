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
	title?: string;
}

const ClayEmptyState: React.FunctionComponent<IProps> = ({
	children,
	className,
	description = 'Sorry, there are no results found',
	imgProps,
	imgSrc,
	small,
	title = 'No results found',
	...otherProps
}: IProps) => {
	const hasImg = imgSrc || imgProps;

	return (
		<div
			className={classNames(className, 'c-empty-state', {
				'c-empty-state-animation': hasImg && !small,
				'c-empty-state-animation-sm': hasImg && small,
			})}
			{...otherProps}
		>
			{hasImg && (
				<div
					className={classNames(
						className,
						{
							'c-empty-state-image': !small,
						},
						{
							'c-empty-state-image-sm': small,
						}
					)}
				>
					<div className="c-empty-state-aspect-ratio">
						<img
							alt="c-empty-state-image"
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

			<div
				className={classNames(
					className,
					{
						'c-empty-state-title': !small,
					},
					{
						'c-empty-state-title-sm': small,
					}
				)}
			>
				<span className="text-truncate-inline">
					<span className="text-truncate">{title}</span>
				</span>
			</div>

			<div
				className={classNames(
					className,
					{
						'c-empty-state-text': !small,
					},
					{
						'c-empty-state-text-sm': small,
					}
				)}
			>
				{description}
			</div>

			{children && (
				<div
					className={classNames(
						className,
						{
							'c-empty-state-footer': !small,
						},
						{
							'c-empty-state-footer-sm': small,
						}
					)}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default ClayEmptyState;
