/**
 * © 2020 Liferay, Inc. <https://liferay.com>
 *
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
	containerProps = {},
	children,
	description = 'Sorry, there are no results found',
	imageSrc,
	title = 'No results found',
}) => {
	const {className, ...otherContainerProps} = containerProps;
	return (
		<div
			className={classNames(className, 'empty-state-root', {
				'empty-state-root--no-image': !imageSrc,
			})}
			{...otherContainerProps}
		>
			{imageSrc && <img alt="empty-state-image" src={imageSrc} />}

			<h2>{title}</h2>

			<div>{description}</div>

			{children && <div className="empty-state-action">{children}</div>}
		</div>
	);
};

export default ClayEmptyState;
