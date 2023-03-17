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
	const activateTrapButton = useRef<HTMLButtonElement>(null);
	const trapFirstButton = useRef<HTMLButtonElement>(null);

	const onActivateFocusTrap = () => {
		setActive(true);
		trapFirstButton.current?.focus();
	};

	const onDeactivateFocusTrap = () => {
		setActive(false);
		activateTrapButton.current?.focus();
	};

	return (
		<>
			<ClayButton
				displayType="link"
				onClick={onActivateFocusTrap}
				ref={activateTrapButton}
			>
				Activate trap
			</ClayButton>
			<FocusTrap active={active}>
				<ClayCard className="mt-4">
					<ClayButton displayType="link" ref={trapFirstButton}>
						Button 1
					</ClayButton>
					<ClayButton displayType="link">Button 2</ClayButton>
					<ClayButton
						displayType="link"
						onClick={onDeactivateFocusTrap}
					>
						Leave trap
					</ClayButton>
				</ClayCard>
			</FocusTrap>
			<ClayButton displayType="link">Button 3</ClayButton>
		</>
	);
};
