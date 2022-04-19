/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import React from 'react';

import ClayToolbar from '../src';

export default {
	component: ClayToolbar,
	title: 'Design System/Components/Toolbar',
};

export const Default = () => (
	<ClayToolbar>
		<ClayToolbar.Nav>
			<ClayToolbar.Item>
				<ClayToolbar.Action disabled href="#" symbol="angle-left" />
			</ClayToolbar.Item>

			<ClayToolbar.Item expand>
				<ClayToolbar.Section>
					<span className="text-truncate-inline">
						<span className="text-truncate">
							Item 1 of
							3,138,732,873,467,182,321,341,231,234,342,559,827,334,424
						</span>
					</span>
				</ClayToolbar.Section>
			</ClayToolbar.Item>

			<ClayToolbar.Item>
				<ClayToolbar.Link href="#">Component Link</ClayToolbar.Link>
			</ClayToolbar.Item>

			<ClayToolbar.Item>
				<ClayToolbar.Action disabled href="#" symbol="angle-right" />
			</ClayToolbar.Item>

			<ClayToolbar.Item>
				<ClayToolbar.Action disabled href="#" symbol="times" />
			</ClayToolbar.Item>
		</ClayToolbar.Nav>
	</ClayToolbar>
);

export const ComponentToolbar = () => (
	<ClayToolbar>
		<ClayLayout.ContainerFluid>
			<ClayToolbar.Nav>
				<ClayToolbar.Item>
					<ClayToolbar.Action disabled href="#" symbol="angle-left" />
				</ClayToolbar.Item>

				<ClayToolbar.Item expand>
					Item 1 of
					3,138,732,873,467,182,321,341,231,234,342,559,827,334,424
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Action
						disabled
						href="#"
						symbol="angle-right"
					/>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Action disabled href="#" symbol="times" />
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayLayout.ContainerFluid>
	</ClayToolbar>
);

export const Subnav = () => (
	<ClayToolbar subnav>
		<ClayLayout.ContainerFluid>
			<ClayToolbar.Nav>
				<ClayToolbar.Item expand>
					<ClayToolbar.Section>
						<span className="text-truncate-inline">
							<span className="text-truncate">
								{'25,392 results for '}

								<strong>
									ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual
								</strong>
							</span>
						</span>
					</ClayToolbar.Section>
				</ClayToolbar.Item>
				<ClayToolbar.Item>
					<ClayToolbar.Link href="#">Clear</ClayToolbar.Link>
				</ClayToolbar.Item>
				<ClayToolbar.Item>
					<ClayButton
						className="component-link tbar-link"
						displayType="unstyled"
					>
						Clear
					</ClayButton>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayLayout.ContainerFluid>
	</ClayToolbar>
);

export const SubnavPrimaryDisabled = () => (
	<ClayToolbar
		inlineBreakpoint="md"
		subnav={{disabled: true, displayType: 'primary'}}
	>
		<ClayLayout.ContainerFluid>
			<ClayToolbar.Nav wrap>
				<ClayToolbar.Item>
					<ClayToolbar.Section>
						<span className="component-text">
							{'25,392 results for '}

							<strong>
								"ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
							</strong>
						</span>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Section>
						<ClayToolbar.Label
							closeButtonProps={{disabled: true}}
							dismissible
							displayType="unstyled"
						>
							Category: Productivity
						</ClayToolbar.Label>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Section>
						<ClayToolbar.Label
							closeButtonProps={{disabled: true}}
							dismissible
							displayType="unstyled"
						>
							Status: Approved
						</ClayToolbar.Label>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item expand>
					<ClayToolbar.Section>
						<ClayToolbar.Label
							closeButtonProps={{disabled: true}}
							dismissible
							displayType="unstyled"
						>
							Type: png
						</ClayToolbar.Label>
					</ClayToolbar.Section>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Section>
						<ClayButton
							className="component-link tbar-link"
							disabled
							displayType="unstyled"
						>
							Clear All
						</ClayButton>
					</ClayToolbar.Section>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayLayout.ContainerFluid>
	</ClayToolbar>
);

export const UpperToolbar = () => (
	<ClayToolbar light>
		<ClayLayout.ContainerFluid>
			<ClayToolbar.Nav>
				<ClayToolbar.Item expand>
					<span className="text-left">
						Workshop_idea_generation.pdf
					</span>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayToolbar.Input placeholder="Search..." sizing="sm" />
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayButton.Group>
						<ClayButtonWithIcon
							displayType="secondary"
							small
							symbol="angle-left"
						/>
						<ClayButtonWithIcon
							displayType="secondary"
							small
							symbol="angle-right"
						/>
					</ClayButton.Group>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayButton displayType="secondary" small>
						Share
					</ClayButton>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayButton small>
						<span className="inline-item inline-item-before">
							<ClayIcon symbol="download" />
						</span>
						Download
					</ClayButton>
				</ClayToolbar.Item>

				<ClayToolbar.Item>
					<ClayButtonWithIcon
						displayType="unstyled"
						small
						symbol="ellipsis-v"
					/>
				</ClayToolbar.Item>
			</ClayToolbar.Nav>
		</ClayLayout.ContainerFluid>
	</ClayToolbar>
);
