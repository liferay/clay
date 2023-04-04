/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import React, {useRef, useState} from 'react';

import {FocusTrap} from '../src/focus-trap';

export default {
	component: FocusTrap,
	title: 'Design System/Components/FocusTrap',
};

export const Default = () => {
	const [active, setActive] = useState(false);
	const activateButtonRef = useRef<HTMLButtonElement>(null);

	const onDeactivateFocusTrap = () => {
		setActive(false);

		if (activateButtonRef.current) {
			activateButtonRef.current.focus();
		}
	};

	return (
		<>
			<ClayButton onClick={() => setActive(true)} ref={activateButtonRef}>
				Activate trap
			</ClayButton>
			{active && (
				<FocusTrap active={active}>
					<ClayCard className="mt-4 p-4">
						<ClayButton displayType="link">Button 1</ClayButton>
						<ClayButton displayType="link">Button 2</ClayButton>
						<div className="mt-4">
							<ClayButton onClick={onDeactivateFocusTrap}>
								Leave trap
							</ClayButton>
						</div>
					</ClayCard>
				</FocusTrap>
			)}
		</>
	);
};

export const FocusOnSpecificElement = () => {
	const [active, setActive] = useState(false);
	const activateButtonRef = useRef<HTMLButtonElement>(null);
	const thirdButtonRef = useRef<HTMLButtonElement>(null);

	const onDeactivateFocusTrap = () => {
		setActive(false);

		if (activateButtonRef.current) {
			activateButtonRef.current.focus();
		}
	};

	return (
		<>
			<ClayButton onClick={() => setActive(true)} ref={activateButtonRef}>
				Activate trap
			</ClayButton>
			{active && (
				<FocusTrap active={active} focusElementRef={thirdButtonRef}>
					<ClayCard className="mt-4 p-4">
						<ClayButton displayType="link">Button 1</ClayButton>
						<ClayButton displayType="link">Button 2</ClayButton>
						<ClayButton displayType="link" ref={thirdButtonRef}>
							Button 3
						</ClayButton>
						<div className="mt-4">
							<ClayButton onClick={onDeactivateFocusTrap}>
								Leave trap
							</ClayButton>
						</div>
					</ClayCard>
				</FocusTrap>
			)}
		</>
	);
};
