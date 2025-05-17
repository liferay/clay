/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {useId} from '@clayui/shared';
import React, {useState} from 'react';

import {Body, Footer, Header, SidePanel, Title} from '../src/side-panel';

export default {
	title: 'Design System/Components/SidePanel',
};

export const Default = () => {
	const [open, setOpen] = useState(false);
	const sidePanelId = useId();

	return (
		<>
			<Button
				aria-controls={sidePanelId}
				aria-pressed={open}
				onClick={() => setOpen(!open)}
			>
				Open
			</Button>

			<SidePanel id={sidePanelId} onOpenChange={setOpen} open={open}>
				<Header>
					<Title>Title</Title>
				</Header>
				<Body>Body</Body>
				<Footer>
					<Button.Group spaced>
						<Button>Primary</Button>
						<Button displayType="secondary">Secondary</Button>
					</Button.Group>
				</Footer>
			</SidePanel>
		</>
	);
};
