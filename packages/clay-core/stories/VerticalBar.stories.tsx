/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Button, {ClayButtonWithIcon} from '@clayui/button';
import Icon from '@clayui/icon';
import React, {useState} from 'react';

import {VerticalBar} from '../src/vertical-bar';

export default {
	argTypes: {
		activation: {
			control: {type: 'select'},
			options: ['manual', 'automatic'],
		},
		barDisplayType: {
			control: {type: 'select'},
			options: [null, 'light', 'dark'],
		},
		contentDisplayType: {
			control: {type: 'select'},
			options: [null, 'light', 'dark'],
		},
		enableResize: {
			control: {type: 'select'},
			options: [true, false],
		},
	},
	component: VerticalBar,
	title: 'Design System/Components/VerticalBar',
};
export function Default(args: any) {
	return (
		<>
			<VerticalBar
				activation={args.activation}
				position="left"
				resize={args.enableResize}
			>
				<VerticalBar.Bar displayType={args.barDisplayType}>
					<VerticalBar.Item>
						<Button aria-label="Tag tab" displayType={null}>
							<Icon symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item divider>
						<Button aria-label="Message tab" displayType={null}>
							<Icon symbol="message" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button
							aria-label="Effects tab"
							displayType={null}
							onClick={(event) => {
								event.preventDefault();

								alert('Clicked');
							}}
						>
							<Icon symbol="effects" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>

				<VerticalBar.Content displayType={args.contentDisplayType}>
					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Tag</div>
						</div>
					</VerticalBar.Panel>

					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Message</div>
						</div>
					</VerticalBar.Panel>
				</VerticalBar.Content>
			</VerticalBar>

			<VerticalBar
				activation={args.activation}
				position="right"
				resize={args.enableResize}
			>
				<VerticalBar.Content displayType={args.contentDisplayType}>
					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Tag</div>
						</div>
					</VerticalBar.Panel>

					<VerticalBar.Panel tabIndex={0}>
						<div className="sidebar-header">
							<div className="component-title">Message</div>
						</div>
					</VerticalBar.Panel>
				</VerticalBar.Content>

				<VerticalBar.Bar displayType={args.barDisplayType}>
					<VerticalBar.Item>
						<Button aria-label="Tag tab" displayType={null}>
							<Icon symbol="tag" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item divider>
						<Button aria-label="Message tab" displayType={null}>
							<Icon symbol="message" />
						</Button>
					</VerticalBar.Item>

					<VerticalBar.Item>
						<Button
							aria-label="Effects tab"
							displayType={null}
							onClick={(event) => {
								event.preventDefault();

								alert('Clicked');
							}}
						>
							<Icon symbol="effects" />
						</Button>
					</VerticalBar.Item>
				</VerticalBar.Bar>
			</VerticalBar>
		</>
	);
}

Default.args = {
	activation: 'manual',
	barDisplayType: 'light',
	contentDisplayType: 'light',
};
export function DynamicContent(args: any) {
	const items = [
		{
			bodyText:
				'A aged steamed, americano organic, percolator skinny single origin black redeye cortado. Cappuccino, extraction viennese extraction that french press strong. Robust to go sweet chicory roast, sweet, pumpkin spice bar  mug robusta cup crema. A filter plunger pot, est percolator half and half latte to go.',
			icon: 'tag',
			title: 'Tag',
		},
		{
			bodyText:
				'Chicory aftertaste siphon java filter blue mountain strong at sweet roast white caffeine. Mazagran lungo id pumpkin spice milk a bar , strong arabica mug black instant. Spoon extraction, cup and at extraction plunger pot dark bar  espresso white frappuccino. Crema pumpkin spice milk flavour instant chicory lungo extra  coffee aged.',
			divider: true,
			icon: 'message',
			title: 'Message',
		},
		{
			bodyText:
				'Caffeine, eu doppio white viennese strong french press doppio extraction frappuccino iced kopi-luwak. Eu instant redeye organic, dark bar  viennese eu irish fair trade crema. Turkish mocha dark flavour acerbic blue mountain cappuccino. Ristretto acerbic single shot saucer skinny mazagran, crema extra  lungo spoon robust.',
			icon: 'effects',
			title: 'Effects',
		},
	];

	const [active, setActive] = useState<React.Key | null>('Tag');

	return (
		<>
			<Button
				onClick={() => {
					setActive('Effects');
				}}
			>
				Go to Effects
			</Button>

			<VerticalBar active={active} onActiveChange={setActive} resize>
				<VerticalBar.Content
					displayType={args.contentDisplayType}
					items={items}
				>
					{(item) => (
						<VerticalBar.Panel key={item.title} tabIndex={0}>
							<div className="sidebar-header">
								<div className="autofit-row sidebar-section">
									<div className="autofit-col autofit-col-expand">
										<div className="component-title">
											{item.title}
										</div>
									</div>

									<div className="autofit-col">
										<ClayButtonWithIcon
											displayType={null}
											onClick={() => setActive(null)}
											symbol="times"
											title="Close"
										/>
									</div>
								</div>
							</div>

							<div className="sidebar-body">{item.bodyText}</div>
						</VerticalBar.Panel>
					)}
				</VerticalBar.Content>

				<VerticalBar.Bar
					displayType={args.barDisplayType}
					items={items}
					virtualize
				>
					{(item) => (
						<VerticalBar.Item
							divider={item.divider}
							key={item.title}
						>
							<Button
								aria-label={`${item.title} tab`}
								displayType={null}
							>
								<Icon symbol={item.icon} />
							</Button>
						</VerticalBar.Item>
					)}
				</VerticalBar.Bar>
			</VerticalBar>
		</>
	);
}

DynamicContent.args = {
	barDisplayType: 'light',
	contentDisplayType: 'light',
};
