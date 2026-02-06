/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLabel from '@clayui/label';
import React, {useState} from 'react';

import ClayPanel from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: ['default', 'block', undefined],
		},
		size: {
			control: {type: 'select'},
			options: ['lg', 'sm', undefined],
		},
	},
	component: ClayPanel,
	title: 'Design System/Components/Panel',
};
export function Default(args: any) {
	return (
		<ClayPanel
			displayTitle={args.displayTitle}
			displayType={args.displayType}
			size={args.size}
		>
			<ClayPanel.Header>Header!</ClayPanel.Header>

			<ClayPanel.Body>Body!</ClayPanel.Body>

			<ClayPanel.Footer>Footer!</ClayPanel.Footer>
		</ClayPanel>
	);
}

Default.args = {
	displayTitle: 'Title',
	displayType: undefined,
};
export function Collapsable(args: any) {
	const [expanded, setExpanded] = useState(true);

	return (
		<>
			<ClayPanel
				collapsable
				displayTitle="Toggle me for expanding!"
				displayType={args.displayType}
				showCollapseIcon={args.showCollapseIcon}
				size={args.size}
			>
				<ClayPanel.Header>Header!</ClayPanel.Header>

				<ClayPanel.Body>Body!</ClayPanel.Body>

				<ClayPanel.Footer>Footer!</ClayPanel.Footer>
			</ClayPanel>

			<hr />
			<h3>Controlled Component</h3>

			<button onClick={() => setExpanded(!expanded)}>
				Toggle Expand
			</button>
			<ClayPanel
				collapsable
				displayTitle="Toggle me for expanding!"
				displayType={args.displayType}
				expanded={expanded}
				onExpandedChange={setExpanded}
				showCollapseIcon={args.showCollapseIcon}
				size={args.size}
			>
				<ClayPanel.Header>Header!</ClayPanel.Header>

				<ClayPanel.Body>Body!</ClayPanel.Body>

				<ClayPanel.Footer>Footer!</ClayPanel.Footer>
			</ClayPanel>
		</>
	);
}

Collapsable.args = {
	displayTitle: 'Title',
	displayType: undefined,
	showCollapseIcon: true,
};
export function Groups() {
	return (
		<ClayPanel.Group>
			{['One', 'Two', 'Three'].map((item) => (
				<ClayPanel
					collapsable
					displayTitle={item}
					key={item}
					showCollapseIcon
				>
					<ClayPanel.Body>
						{`Here is some content inside for number ${item}`}
					</ClayPanel.Body>
				</ClayPanel>
			))}
		</ClayPanel.Group>
	);
}
export function Sheet(args: any) {
	return (
		<div className="sheet">
			<ClayPanel.Group fluid={args.fluid}>
				{['One', 'Two', 'Three'].map((item) => (
					<ClayPanel
						collapsable
						displayTitle={item}
						displayType="unstyled"
						key={item}
						showCollapseIcon
					>
						<ClayPanel.Body>
							{`Here is some content inside for number ${item}`}
						</ClayPanel.Body>
					</ClayPanel>
				))}
			</ClayPanel.Group>
		</div>
	);
}

Sheet.args = {
	fluid: true,
};
export function CollapsableWithTitle(args: any) {
	return (
		<ClayPanel
			collapsable
			displayTitle={
				<ClayPanel.Title>
					<h3>Rule Name</h3>

					<span>{'If field '}</span>

					<ClayLabel displayType="success">Country</ClayLabel>

					<ClayLabel>Is Equal To</ClayLabel>

					<span>{'value '}</span>

					<ClayLabel displayType="info">Brazil</ClayLabel>

					<span>{'enable '}</span>

					<ClayLabel displayType="success">State</ClayLabel>
				</ClayPanel.Title>
			}
			displayType={args.displayType}
			showCollapseIcon
			size={args.size}
		>
			<ClayPanel.Header>Header!</ClayPanel.Header>

			<ClayPanel.Body>Body!</ClayPanel.Body>

			<ClayPanel.Footer>Footer!</ClayPanel.Footer>
		</ClayPanel>
	);
}
export function Small() {
	return (
		<ClayPanel.Group small>
			{['One', 'Two', 'Three'].map((item) => (
				<ClayPanel
					collapsable
					displayTitle={item}
					key={item}
					showCollapseIcon
				>
					<ClayPanel.Body>
						{`Here is some content inside for number ${item}`}
					</ClayPanel.Body>
				</ClayPanel>
			))}
		</ClayPanel.Group>
	);
}
