/**
 * © 2020 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
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
	description = 'Sorry, there are no results found',
	imageSrc,
	title = 'No results found',
}) => (
	<div
		className={`empty-state-root ${!imageSrc &&
			'empty-state-root--no-image'}`}
	>
		{imageSrc && <img alt="empty-state-image" src={imageSrc} />}

		<h2>{title}</h2>

		<div>{description}</div>

		{children && <div className="empty-state-action">{children}</div>}
	</div>
);

export default ClayEmptyState;
