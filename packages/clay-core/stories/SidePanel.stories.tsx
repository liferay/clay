/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Button from '@clayui/button';
import {ClayCardWithNavigation} from '@clayui/card';
import ClayForm, {ClayInput, ClaySelect} from '@clayui/form';
import Panel from '@clayui/panel';
import {useId} from '@clayui/shared';
import Toolbar from '@clayui/toolbar';
import React, {useRef, useState} from 'react';

import {SidePanel, SidePanelWithDrilldown} from '../src/side-panel';

export default {
	title: 'Design System/Components/SidePanel',
};

function BodyContent() {
	return (
		<>
			Body
			<br />
			<br />
			Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong. Viennese flavour cup eu,
			percolator froth ristretto mazagran caffeine. White roast seasonal,
			mocha trifecta, dripper caffeine spoon acerbic to go macchiato
			strong. Viennese flavour cup eu, percolator froth ristretto mazagran
			caffeine. White roast seasonal, mocha trifecta, dripper caffeine
			spoon acerbic to go macchiato strong. Viennese flavour cup eu,
			percolator froth ristretto mazagran caffeine. White roast seasonal,
			mocha trifecta, dripper caffeine spoon acerbic to go macchiato
			strong.
		</>
	);
}
export function PositionAbsolute(args: any) {
	const [open, setOpen] = useState(false);
	const [openStart, setOpenStart] = useState(false);
	const sidePanelId = useId();
	const sidePanelStartId = useId();
	const sidebarTitleId = useId();

	const ref = useRef<HTMLDivElement | null>(null);

	const options = [
		{
			label: 'gram (g)',
			value: 'g',
		},
		{
			label: 'kilogram (kg)',
			value: 'kg',
		},
		{
			label: 'ounce (oz)',
			value: 'oz',
		},
		{
			label: 'pound (lb)',
			value: 'lb',
		},
		{
			label: 'ton (T)',
			value: 'T',
		},
	];

	return (
		<div className="m-n3 min-vh-100">
			<Toolbar className="bg-white sticky-top">
				<Toolbar.Nav>
					<Toolbar.Item className="ml-2">
						<Button
							aria-controls={sidePanelStartId}
							aria-pressed={openStart}
							onClick={() => setOpenStart(!openStart)}
						>
							Open Left
						</Button>
					</Toolbar.Item>

					<Toolbar.Item expand>Position: Absolute</Toolbar.Item>

					<Toolbar.Item className="mr-2">
						<Button
							aria-controls={sidePanelId}
							aria-pressed={open}
							onClick={() => setOpen(!open)}
						>
							Open Right
						</Button>
					</Toolbar.Item>
				</Toolbar.Nav>
			</Toolbar>

			<div ref={ref}>
				<SidePanel
					containerRef={ref}
					direction="left"
					displayType="dark"
					id={sidePanelStartId}
					onOpenChange={setOpenStart}
					open={openStart}
				>
					<SidePanel.Header
						messages={{
							closeAriaLabel: 'Close the Left Panel side panel.',
						}}
						sticky={args.footerSticky}
					>
						<SidePanel.Title id={sidebarTitleId}>
							<div>Left Panel</div>
						</SidePanel.Title>
					</SidePanel.Header>

					<SidePanel.Body>
						<BodyContent />
					</SidePanel.Body>

					<SidePanel.Footer sticky={args.footerSticky}>
						<Button.Group spaced>
							<Button>Primary</Button>

							<Button displayType="secondary">Secondary</Button>
						</Button.Group>
					</SidePanel.Footer>
				</SidePanel>

				<div className="container-fluid">
					{`Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong.`}

					<br />

					<img
						alt="cat"
						className="img-fluid"
						src="https://cataas.com/cat/says/it has side panel"
					/>
				</div>

				<SidePanel
					containerRef={ref}
					id={sidePanelId}
					onOpenChange={setOpen}
					open={open}
				>
					<SidePanel.Header
						messages={{
							closeAriaLabel: 'Close the Title side panel.',
						}}
						sticky={args.headerSticky}
					>
						<SidePanel.Title>Title</SidePanel.Title>
					</SidePanel.Header>

					<SidePanel.Body>
						<Panel.Group flush small>
							<Panel displayTitle="DETAIL" displayType="unstyled">
								<Panel.Body>
									<ClayForm.Group>
										<label htmlFor="decimalQuantity">
											Decimal Quantity
										</label>

										<ClayInput
											id="decimalQuantity"
											type="number"
										></ClayInput>
									</ClayForm.Group>

									<ClayForm.Group>
										<label
											htmlFor="measurementUnits"
											id="measurementUnitsLabel"
										>
											Measurement Units
										</label>

										<ClaySelect
											aria-label="Select measurement unit"
											id="measurementUnitsLabel"
										>
											{options.map((item) => (
												<ClaySelect.Option
													key={item.value}
													label={item.label}
													value={item.value}
												/>
											))}
										</ClaySelect>
									</ClayForm.Group>

									<ClayForm.Group>
										<label htmlFor="price">Price</label>

										<ClayInput
											id="price"
											type="number"
										></ClayInput>
									</ClayForm.Group>

									<ClayForm.Group>
										<label htmlFor="discount">
											Discount
										</label>

										<ClayInput
											id="discount"
											type="number"
										></ClayInput>
									</ClayForm.Group>

									<ClayForm.Group>
										<label htmlFor="total">Total</label>

										<ClayInput
											id="total"
											type="number"
										></ClayInput>
									</ClayForm.Group>

									<ClayForm.Group>
										<label htmlFor="deliveryGroup">
											Delivery Group
										</label>

										<textarea
											className="form-control"
											id="deliveryGroup"
											placeholder="Delivery Group"
										></textarea>
									</ClayForm.Group>
								</Panel.Body>
							</Panel>
						</Panel.Group>
					</SidePanel.Body>

					<SidePanel.Footer sticky={args.footerSticky}>
						<Button.Group spaced>
							<Button>Primary</Button>

							<Button displayType="secondary">Secondary</Button>
						</Button.Group>
					</SidePanel.Footer>
				</SidePanel>
			</div>
		</div>
	);
}

PositionAbsolute.args = {
	footerSticky: false,
	headerSticky: false,
};
export function PositionFixed() {
	const [open, setOpen] = useState(true);
	const [openStart, setOpenStart] = useState(false);
	const sidePanelId = useId();
	const sidePanelStartId = useId();

	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<div className="m-n3 min-vh-100">
			<Toolbar className="bg-white sticky-top">
				<Toolbar.Nav>
					<Toolbar.Item className="ml-2">
						<Button
							aria-controls={sidePanelStartId}
							aria-pressed={openStart}
							onClick={() => setOpenStart(!openStart)}
						>
							Open Left
						</Button>
					</Toolbar.Item>

					<Toolbar.Item expand>Position: Fixed</Toolbar.Item>

					<Toolbar.Item className="mr-2">
						<Button
							aria-controls={sidePanelId}
							aria-pressed={open}
							onClick={() => setOpen(!open)}
						>
							Open Right
						</Button>
					</Toolbar.Item>
				</Toolbar.Nav>
			</Toolbar>

			<div className="side-panel-container" ref={ref}>
				<SidePanel
					containerRef={ref}
					data-testid="sidePanel"
					direction="left"
					id={sidePanelStartId}
					onOpenChange={setOpenStart}
					open={openStart}
					position="fixed"
				>
					<SidePanel.Header
						messages={{
							closeAriaLabel: 'Close the Left Panel side panel.',
						}}
					>
						<SidePanel.Title>Left Panel</SidePanel.Title>
					</SidePanel.Header>

					<SidePanel.Body>
						<BodyContent />
					</SidePanel.Body>

					<SidePanel.Footer>
						<Button.Group spaced>
							<Button>Primary</Button>

							<Button displayType="secondary">Secondary</Button>
						</Button.Group>
					</SidePanel.Footer>
				</SidePanel>

				<div className="container-fluid">
					{`Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong. Viennese flavour cup eu, percolator froth ristretto mazagran
                    caffeine. White roast seasonal, mocha trifecta, dripper caffeine
                    spoon acerbic to go macchiato strong.`}

					<br />

					<img
						alt="cat"
						className="img-fluid"
						src="https://cataas.com/cat/says/it has side panel"
					/>
				</div>

				<SidePanel
					containerRef={ref}
					id={sidePanelId}
					onOpenChange={setOpen}
					open={open}
					position="fixed"
				>
					<SidePanel.Header
						messages={{
							closeAriaLabel: 'Close the Right Panel side panel.',
						}}
					>
						<SidePanel.Title>Right Panel</SidePanel.Title>
					</SidePanel.Header>

					<SidePanel.Body>
						<BodyContent />
					</SidePanel.Body>

					<SidePanel.Footer>
						<Button.Group spaced>
							<Button displayType="secondary">Cancel</Button>

							<Button>Save</Button>
						</Button.Group>
					</SidePanel.Footer>
				</SidePanel>
			</div>
		</div>
	);
}
export function FluidWidth() {
	const [open, setOpen] = useState(true);
	const sidePanelId = useId();

	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<div className="m-n3 min-vh-100">
			<Toolbar className="bg-white sticky-top">
				<Toolbar.Nav>
					<Toolbar.Item className="ml-auto mr-2">
						<Button
							aria-controls={sidePanelId}
							aria-pressed={open}
							onClick={() => setOpen(!open)}
						>
							Open Right
						</Button>
					</Toolbar.Item>
				</Toolbar.Nav>
			</Toolbar>

			<div className="side-panel-container vh-100" ref={ref}>
				<div className="container-fluid">
					<p>
						Viennese flavour cup eu, percolator froth ristretto
						mazagran caffeine. White roast seasonal, mocha trifecta,
						dripper caffeine spoon acerbic to go macchiato strong.
						Viennese flavour cup eu, percolator froth ristretto
						mazagran caffeine. White roast seasonal, mocha trifecta,
						dripper caffeine spoon acerbic to go macchiato strong.
						Viennese flavour cup eu, percolator froth ristretto
						mazagran caffeine. White roast seasonal, mocha trifecta,
						dripper caffeine spoon acerbic to go macchiato strong.
						Viennese flavour cup eu, percolator froth ristretto
						mazagran caffeine. White roast seasonal, mocha trifecta,
						dripper caffeine spoon acerbic to go macchiato strong
					</p>

					<img
						alt="cat"
						className="img-fluid"
						src="https://cataas.com/cat/says/it has side panel"
					/>
				</div>

				<SidePanel
					containerRef={ref}
					fluid
					id={sidePanelId}
					onOpenChange={setOpen}
					open={open}
					position="fixed"
				>
					<SidePanel.Header
						messages={{
							closeAriaLabel: 'Close the Right Panel side panel.',
						}}
					>
						<SidePanel.Title>Right Panel</SidePanel.Title>
					</SidePanel.Header>

					<SidePanel.Body>
						<BodyContent />
					</SidePanel.Body>

					<SidePanel.Footer>
						<Button.Group spaced>
							<Button displayType="secondary">Cancel</Button>

							<Button>Save</Button>
						</Button.Group>
					</SidePanel.Footer>
				</SidePanel>
			</div>
		</div>
	);
}
export function Drilldown() {
	const [open, setOpen] = useState(true);
	const [panelKey, setPanelKey] = useState<React.Key>('x1');

	const sidePanelId = useId();

	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<div className="m-n3 min-vh-100">
			<div className="side-panel-container" ref={ref}>
				<Button
					aria-controls={sidePanelId}
					aria-pressed={open}
					onClick={() => setOpen(!open)}
				>
					Open Panel
				</Button>

				<SidePanelWithDrilldown
					containerRef={ref}
					id={sidePanelId}
					onOpenChange={setOpen}
					onSelectedPanelKeyChange={setPanelKey}
					open={open}
					panels={{
						x1: {
							component: (
								<SidePanel.Body>
									<ClayCardWithNavigation
										horizontal
										horizontalSymbol="user"
										onClick={() => setPanelKey('x2')}
										title="Profile"
									/>

									<ClayCardWithNavigation
										horizontal
										horizontalSymbol="edit-layout"
										onClick={() => setPanelKey('x3')}
										title="Dashboard"
									/>
								</SidePanel.Body>
							),

							title: 'User',
						},
						x2: {
							component: (
								<SidePanel.Body>
									This is the Profile panel
									<ClayCardWithNavigation
										className="mt-4"
										horizontal
										horizontalSymbol="pencil"
										onClick={() => setPanelKey('x4')}
										title="Edit Profile"
									/>
								</SidePanel.Body>
							),

							headerProps: {
								messages: {
									backAriaLabel: 'Go to the user panel.',
								},
							},
							parentKey: 'x1',
							title: 'Profile',
						},
						x3: {
							component: (
								<SidePanel.Body>
									This is the Dashboard panel
								</SidePanel.Body>
							),

							headerProps: {
								messages: {
									backAriaLabel: 'Go to the user panel.',
								},
							},
							parentKey: 'x1',
							title: 'Dashboard',
						},
						x4: {
							component: (
								<SidePanel.Body>
									This the Edit Profile panel
								</SidePanel.Body>
							),

							headerProps: {
								messages: {
									backAriaLabel: 'Go to the profile panel.',
								},
							},
							parentKey: 'x2',
							title: 'Edit Profile',
						},
					}}
					position="fixed"
					selectedPanelKey={panelKey}
				/>
			</div>
		</div>
	);
}
