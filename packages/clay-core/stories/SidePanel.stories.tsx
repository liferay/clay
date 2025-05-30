/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import ClayForm, {ClayInput, ClaySelect} from '@clayui/form';
import Panel from '@clayui/panel';
import {useId} from '@clayui/shared';
import Toolbar from '@clayui/toolbar';
import React, {useRef, useState} from 'react';

import {SidePanel} from '../src/side-panel';

export default {
	title: 'Design System/Components/SidePanel',
};

const BodyContent = () => {
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
};

export const PositionAbsolute = (args: any) => {
	const [open, setOpen] = useState(false);
	const [openStart, setOpenStart] = useState(false);
	const sidePanelId = useId();
	const sidePanelStartId = useId();

	const ref = useRef<HTMLElement | null>(null);

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
					<SidePanel.Header sticky={args.footerSticky}>
						<SidePanel.Title>Left Panel</SidePanel.Title>
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
					<SidePanel.Header sticky={args.headerSticky}>
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
};

PositionAbsolute.args = {
	footerSticky: false,
	headerSticky: false,
};

export const PositionFixed = () => {
	const [open, setOpen] = useState(true);
	const [openStart, setOpenStart] = useState(false);
	const sidePanelId = useId();
	const sidePanelStartId = useId();

	const ref = useRef<HTMLElement | null>(null);

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
					<SidePanel.Header>
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
					<SidePanel.Header>
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
};
