/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {useId} from '@clayui/shared';
import Toolbar from '@clayui/toolbar';
import React, {useRef, useState} from 'react';

import {SidePanel} from '../src/side-panel';

export default {
	title: 'Design System/Components/SidePanel',
};

export const Default = () => {
	const [open, setOpen] = useState(false);
	const [openStart, setOpenStart] = useState(false);
	const sidePanelId = useId();
	const sidePanelStartId = useId();

	const ref = useRef<HTMLElement | null>(null);

	return (
		<div className="m-n3 min-vh-100">
			<Toolbar>
				<Toolbar.Nav>
					<Toolbar.Item className="ml-2">
						<Toolbar.Section>
							<Button.Group spaced>
								<Button
									aria-controls={sidePanelStartId}
									aria-pressed={openStart}
									onClick={() => setOpenStart(!openStart)}
								>
									Open Left
								</Button>

								<Button
									aria-controls={sidePanelId}
									aria-pressed={open}
									onClick={() => setOpen(!open)}
								>
									Open Right
								</Button>
							</Button.Group>
						</Toolbar.Section>
					</Toolbar.Item>
				</Toolbar.Nav>
			</Toolbar>

			<div ref={ref}>
				<SidePanel
					containerRef={ref}
					direction="left"
					id={sidePanelStartId}
					onOpenChange={setOpenStart}
					open={openStart}
				>
					<SidePanel.Header>
						<SidePanel.Title>Left Panel</SidePanel.Title>
					</SidePanel.Header>
					<SidePanel.Body>Body</SidePanel.Body>
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
				>
					<SidePanel.Header>
						<SidePanel.Title>Right Panel</SidePanel.Title>
					</SidePanel.Header>
					<SidePanel.Body>Body</SidePanel.Body>
					<SidePanel.Footer>
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
