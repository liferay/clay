/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {InternalDispatch, usePrevious} from '@clayui/shared';
import classnames from 'classnames';
import React from 'react';
import {CSSTransition} from 'react-transition-group';

import {Messages} from './Header';
import {Props as SidePanelProps, SidePanel} from './SidePanel';

export type Props = {
	/**
	 * Callback is called when the selectedPanelKey prop changes (controlled).
	 */

	onSelectedPanelKeyChange: InternalDispatch<string>;

	/**
	 * Group of panels to be rendered
	 */

	panels: Panels;

	/**
	 * Selected panel key
	 */

	selectedPanelKey: keyof Panels;
} & Omit<SidePanelProps, 'children'>;

type Panel = {
	component: React.ReactNode;
	headerMessages?: Messages;
	parentKey?: string;
	title: string;
};

type Panels = {
	[key: React.Key]: Panel;
};

export function SidePanelWithDrilldown({
	onSelectedPanelKeyChange,
	panels,
	selectedPanelKey,
	...otherProps
}: Props) {
	const previousSelectedPanel = usePrevious<keyof Panels>(selectedPanelKey);

	const transitionDirection =
		panels[previousSelectedPanel]?.parentKey === selectedPanelKey
			? 'prev'
			: 'next';

	return (
		<SidePanel {...otherProps} aria-label={panels[selectedPanelKey]?.title}>
			<div className="drilldown-inner">
				{Object.entries(panels).map(([panelKey, panel]) => {
					const active = selectedPanelKey === panelKey;
					const parentPanelKey = panel.parentKey;

					const initialClasses = classnames('transitioning', {
						'drilldown-prev-initial':
							transitionDirection === 'prev',
					});

					return (
						<CSSTransition
							aria-hidden={!active}
							className={classnames('drilldown-item', {
								'drilldown-current': active,
							})}
							classNames={{
								enter: initialClasses,
								enterActive: `drilldown-transition drilldown-${transitionDirection}-active`,
								exit: initialClasses,
								exitActive: `drilldown-transition drilldown-${transitionDirection}-active`,
							}}
							in={active}
							key={panelKey}
							timeout={250}
						>
							<div className="drilldown-item-inner">
								<SidePanel.Header
									messages={panel.headerMessages}
									{...(parentPanelKey && {
										onBack: () =>
											onSelectedPanelKeyChange(
												parentPanelKey
											),
									})}
								>
									<SidePanel.Title>
										{panel.title}
									</SidePanel.Title>
								</SidePanel.Header>

								{panel.component}
							</div>
						</CSSTransition>
					);
				})}
			</div>
		</SidePanel>
	);
}
