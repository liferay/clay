/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayCheckbox} from '@clayui/form';
import ClayLayout from '@clayui/layout';
import ClayPopover from '@clayui/popover';
import React, {useState} from 'react';

import {OverlayMask} from '../src/overlay-mask';

type Props = {
	onClick: () => void;
};

// Use only for demo.
const Dot = ({onClick}: Props) => (
	<div
		onClick={onClick}
		style={{
			alignItems: 'center',
			backgroundColor: '#ffffff',
			border: '2px solid #0053F0',
			borderRadius: '100%',
			cursor: 'pointer',
			display: 'flex',
			height: '32px',
			justifyContent: 'center',
			marginLeft: '-10px',
			marginTop: '-10px',
			position: 'absolute',
			width: '32px',
		}}
	>
		<div
			style={{
				backgroundColor: '#004AD7',
				borderRadius: '100%',
				height: '24px',
				width: '24px',
			}}
		/>
	</div>
);

export default {
	component: OverlayMask,
	title: 'Design System/Components/OverlayMask',
};

export const Default = () => (
	<OverlayMask visible>
		<ClayButton>Button</ClayButton>
	</OverlayMask>
);

export const WithPopover = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div style={{marginLeft: '200px', marginTop: '200px'}}>
			{!visible && <Dot onClick={() => setVisible(true)} />}

			<OverlayMask<HTMLButtonElement> visible={visible}>
				{(ref) => (
					<ClayPopover
						alignPosition="right-top"
						closeOnClickOutside
						displayType="secondary"
						header={
							<ClayLayout.ContentRow
								noGutters
								verticalAlign="center"
							>
								<ClayLayout.ContentCol expand>
									<span>Step 1 of 3: Customize logo</span>
								</ClayLayout.ContentCol>
								<ClayLayout.ContentCol>
									<ClayButtonWithIcon
										aria-label="close"
										className="close"
										displayType="unstyled"
										onClick={() => setVisible(false)}
										small
										symbol="times"
									/>
								</ClayLayout.ContentCol>
							</ClayLayout.ContentRow>
						}
						onShowChange={setVisible}
						show={visible}
						size="lg"
						trigger={<ClayButton ref={ref}>Logo</ClayButton>}
					>
						<p>
							Place your name and logo using this widget and make
							then a link the Homepage.
						</p>

						<ClayLayout.ContentRow noGutters verticalAlign="center">
							<ClayLayout.ContentCol expand>
								<ClayCheckbox
									checked={false}
									label="Don't show this again"
									onChange={() => {}}
								/>
							</ClayLayout.ContentCol>
							<ClayLayout.ContentCol>
								<ClayButton.Group spaced>
									<ClayButton displayType="secondary" small>
										Previous
									</ClayButton>
									<ClayButton
										onClick={() => setVisible(false)}
										small
									>
										Got it
									</ClayButton>
								</ClayButton.Group>
							</ClayLayout.ContentCol>
						</ClayLayout.ContentRow>
					</ClayPopover>
				)}
			</OverlayMask>
		</div>
	);
};
