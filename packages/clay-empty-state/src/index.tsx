/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps {
	/**
	 * Props to add to the outer most container.
	 */
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	/**
	 * Message the user will see describing what they can do when on this screen
	 */
	description?: string;

	/**
	 * Source of the image to signify the state
	 */
	imageSrc?: string;

	/**
	 * Title of the message highlighting the description
	 */
	title?: string;
}

const ClayEmptyState: React.FunctionComponent<IProps> = ({
	children,
	containerProps = {},
	description = 'Sorry, there are no results found',
	imageSrc,
	title = 'No results found',
}) => {
	const {className, ...otherContainerProps} = containerProps;

	return (
		<div
			className={classNames(className, 'c-empty-state', {
				'c-empty-state-animation': imageSrc,
			})}
			{...otherContainerProps}
		>
			{imageSrc && (
				<div className="c-empty-state-image">
					<div className="c-empty-state-aspect-ratio">
						<img
							alt="empty-state-image"
							className="aspect-ratio-item aspect-ratio-item-fluid"
							src={imageSrc}
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
