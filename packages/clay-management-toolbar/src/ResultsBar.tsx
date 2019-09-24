/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '@clayui/label';
import {LinkOrButton, sub} from '@clayui/shared';
import React from 'react';

import ResultsBarItem from './ResultsBarItem';
import {ILabel} from './types';

interface IProps {
	/**
	 * Setting a link will render a ClayLink for the `clear` action.
	 */
	clearResultsURL?: string;

	/**
	 * Flag that identifies when to disable all actions and features of the
	 * component.
	 */
	disabled?: boolean;

	/**
	 * Set the labels of the text visible by the component, use this to add
	 * support for i18n.
	 */
	labels?: ILabel;

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
	 * Set the value the user entered in search.
	 */
	searchValue?: string;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Flag to show total items.
	 */
	totalItems?: number;
}

const ResultsBar: React.FunctionComponent<IProps> = ({
	clearResultsURL,
	disabled,
	filterLabels = [],
	labels = {
		clear: 'Clear',
		totalItems: '{0} results for',
	},
	onClearButtonClick,
	searchValue,
	spritemap,
	totalItems = 0,
}) => (
	<nav className="tbar tbar-inline-xs-down subnav-tbar subnav-tbar-primary">
		<div className="container-fluid container-fluid-max-xl">
			<ul className="tbar-nav tbar-nav-wrap">
				<ResultsBarItem expand={!(filterLabels.length > 0)}>
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
				</ResultsBarItem>
				{filterLabels.map(({value, ...others}, index: number) => (
					<ResultsBarItem
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
					</ResultsBarItem>
				))}
				<ResultsBarItem>
					<LinkOrButton
						buttonDisplayType="unstyled"
						className="component-link tbar-link"
						disabled={disabled}
						href={clearResultsURL}
						onClick={onClearButtonClick}
					>
						{labels.clear}
					</LinkOrButton>
				</ResultsBarItem>
			</ul>
		</div>
	</nav>
);

export default ResultsBar;
