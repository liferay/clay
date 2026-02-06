/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import React, {useEffect, useRef, useState} from 'react';

import {FocusTrap} from '../src/focus-trap';

export default {
	component: FocusTrap,
	title: 'Design System/Components/FocusTrap',
};
export function Default() {
	const [active, setActive] = useState(false);
	const activateButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (active) {
			return () => activateButtonRef.current?.focus();
		}
	}, [active]);

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
							<ClayButton onClick={() => setActive(false)}>
								Leave trap
							</ClayButton>
						</div>
					</ClayCard>
				</FocusTrap>
			)}
		</>
	);
}
export function FocusOnSpecificElement() {
	const [active, setActive] = useState(false);
	const activateButtonRef = useRef<HTMLButtonElement>(null);
	const thirdButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (active) {
			return () => activateButtonRef.current?.focus();
		}
	}, [active]);

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
							<ClayButton onClick={() => setActive(false)}>
								Leave trap
							</ClayButton>
						</div>
					</ClayCard>
				</FocusTrap>
			)}
		</>
	);
}
