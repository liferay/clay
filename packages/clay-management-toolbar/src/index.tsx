/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ActiveState from './ActiveState';
import classNames from 'classnames';
import DefaultState from './DefaultState';
import React from 'react';
import ResultsBar from './ResultsBar';

interface IProps
	extends React.ComponentProps<typeof DefaultState>,
		React.ComponentProps<typeof ResultsBar>,
		React.ComponentProps<typeof ActiveState> {
	/**
	 * Flag that identifies when to show the active state of the component.
	 */
	active?: boolean;

	className?: string;

	/**
	 * Flag that sets when to display the result bar
	 */
	showResultsBar?: boolean;
}

const ClayManagementToolbar: React.FunctionComponent<IProps> = ({
	active = false,
	className,
	clearResultsURL,
	disabled,
	filterLabels,
	labels,
	onClearButtonClick = () => {},
	searchValue,
	showResultsBar = false,
	spritemap,
	totalItems,
	...otherProps
}) => {
	return (
		<>
			<nav
				className={classNames(
					'management-bar management-bar-light navbar navbar-expand-md',
					className,
					{
						'management-bar-light': !active,
						'management-bar-primary navbar-nowrap': active,
					}
				)}
			>
				<div className="container-fluid container-fluid-max-xl">
					{active ? (
						<ActiveState
							{...otherProps}
							disabled={disabled}
							labels={labels}
							spritemap={spritemap}
							totalItems={totalItems}
						/>
					) : (
						<DefaultState
							{...otherProps}
							disabled={disabled}
							labels={labels}
							searchValue={searchValue}
							spritemap={spritemap}
						/>
					)}
				</div>
			</nav>

			{showResultsBar && (
				<ResultsBar
					clearResultsURL={clearResultsURL}
					disabled={disabled}
					filterLabels={filterLabels}
					labels={labels}
					onClearButtonClick={onClearButtonClick}
					searchValue={searchValue}
					spritemap={spritemap}
					totalItems={totalItems}
				/>
			)}
		</>
	);
};

export default ClayManagementToolbar;
