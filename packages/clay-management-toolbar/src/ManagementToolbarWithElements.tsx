/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ActiveState from './ActiveState';
import ClayLabel from '@clayui/label';
import ClayManagementToolbar from './ManagementToolbar';
import ClayResultsBar from './ResultsBar';
import DefaultState from './DefaultState';
import React from 'react';
import {LinkOrButton, sub} from '@clayui/shared';

interface IProps
	extends React.ComponentProps<typeof DefaultState>,
		React.ComponentProps<typeof ActiveState> {
	/**
	 * Flag that identifies when to show the active state of the component.
	 */
	active?: boolean;

	className?: string;

	/**
	 * Setting a link will render a ClayLink for the `clear` action.
	 */
	clearResultsURL?: string;

	/**
	 * Will render a list of ClayLabel.
	 */
	filterLabels?: Array<
		React.ComponentProps<typeof ClayLabel> & {value: React.ReactText}
	>;

	/**
	 * Callback will always be called when clicking on the clear button.
	 * will render a ClayButton.
	 */
	onClearButtonClick?: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;

	/**
	 * Flag that sets when to display the result bar
	 */
	showResultsBar?: boolean;
}

const ClayManagementToolbarWithElements: React.FunctionComponent<IProps> = ({
	active = false,
	className,
	clearResultsURL,
	disabled,
	filterLabels = [],
	labels = {
		allSelected: 'All Selected',
		checkbox: 'Select Items',
		clear: 'Clear',
		clearSelection: 'Clear',
		filterAndOrder: 'Filter and Order',
		selectAll: 'Select all',
		selected: 'Selected',
		selectedItemsOfTotalItems: '{0} of {1}',
		totalItems: '{0} results for',
	},
	onClearButtonClick = () => {},
	searchValue,
	showResultsBar = false,
	spritemap,
	totalItems = 0,
	...otherProps
}) => {
	return (
		<>
			<ClayManagementToolbar active={active} className={className}>
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
			</ClayManagementToolbar>

			{showResultsBar && (
				<ClayResultsBar>
					<ClayResultsBar.Item>
						<span className="component-text text-truncate-inline">
							<span className="text-truncate">
								{sub(labels.totalItems, [totalItems])}
								{searchValue && (
									<>
										{' "'}
										<strong>{searchValue}</strong>
										{'"'}
									</>
								)}
							</span>
						</span>
					</ClayResultsBar.Item>
					{filterLabels.map(({value, ...others}, index: number) => (
						<ClayResultsBar.Item
							expand={filterLabels.length - 1 === index}
							key={index}
						>
							<ClayLabel
								{...others}
								className="component-label tbar-label"
								displayType="unstyled"
								spritemap={spritemap}
							>
								{value}
							</ClayLabel>
						</ClayResultsBar.Item>
					))}
					<ClayResultsBar.Item>
						<LinkOrButton
							buttonDisplayType="unstyled"
							className="component-link tbar-link"
							disabled={disabled}
							href={clearResultsURL}
							onClick={onClearButtonClick}
						>
							{labels.clear}
						</LinkOrButton>
					</ClayResultsBar.Item>
				</ClayResultsBar>
			)}
		</>
	);
};

export default ClayManagementToolbarWithElements;
