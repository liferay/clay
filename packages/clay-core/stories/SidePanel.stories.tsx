/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {useId} from '@clayui/shared';
import React, {useRef, useState} from 'react';

import {SidePanel} from '../src/side-panel';

export default {
	title: 'Design System/Components/SidePanel',
};

export const Default = () => {
	const [open, setOpen] = useState(false);
	const sidePanelId = useId();

	const ref = useRef<HTMLElement | null>(null);

	return (
		<div className="position-relative" ref={ref}>
			<Button
				aria-controls={sidePanelId}
				aria-pressed={open}
				onClick={() => setOpen(!open)}
			>
				Open
			</Button>

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
				src="https://cataas.com/cat/says/it has side panel"
			/>

			<SidePanel
				containerRef={ref}
				id={sidePanelId}
				onOpenChange={setOpen}
				open={open}
			>
				<SidePanel.Header>
					<SidePanel.Title>Title</SidePanel.Title>
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
	);
};
