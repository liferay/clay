/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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

export const Default = (args: any) => (
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

Default.args = {
	displayTitle: 'Title',
	displayType: undefined,
};

export const Collapsable = (args: any) => {
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
};

Collapsable.args = {
	displayTitle: 'Title',
	displayType: undefined,
	showCollapseIcon: true,
};

export const Groups = () => (
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

export const Sheet = (args: any) => (
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

Sheet.args = {
	fluid: true,
};

export const CollapsableWithTitle = (args: any) => (
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

export const Small = () => (
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
