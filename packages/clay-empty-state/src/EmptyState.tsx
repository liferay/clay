/**
 * © 2020 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import React from 'react';

const emptyStateImg = require('../images/empty_state.gif');
const searchStateImg = require('../images/search_state.gif');
const successStateImg = require('../images/success_state.gif');

export const DISPLAY_STATES = {
	EMPTY: 'empty',
	SEARCH: 'search',
	SUCCESS: 'success',
};

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	actionLabel: string;
	description: string;
	displayState: string;
	onClickAction: () => void;
	title: string;
}

const ClayEmptyState: React.FunctionComponent<IProps> = ({
	actionLabel,
	description,
	displayState,
	onClickAction,
	title,
}) => {
	let imageState;

	if (displayState === DISPLAY_STATES.EMPTY) {
		imageState = emptyStateImg;
	} else if (displayState === DISPLAY_STATES.SEARCH) {
		imageState = searchStateImg;
	} else if (displayState === DISPLAY_STATES.SUCCESS) {
		imageState = successStateImg;
	}

	return (
		<div
			className={`empty-state-root ${!imageState &&
				'empty-state-root--no-image'}`}
		>
			{imageState && <img alt="empty-state-image" src={imageState} />}

			<h2>{title || 'No results found'}</h2>

			<div>{description || 'Sorry, there are no results found'}</div>

			{actionLabel && onClickAction && (
				<div className="empty-state-action">
					<ClayButton displayType="secondary" onClick={onClickAction}>
						{actionLabel}
					</ClayButton>
				</div>
			)}
		</div>
	);
};

export default ClayEmptyState;
