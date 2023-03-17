/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FocusScope} from '@clayui/shared';
import React from 'react';

type Props<T> = {
	/**
	 * Flag to indicate if the focus trap is activated.
	 */
	active?: boolean;

	/**
	 * The elements that will receive the focus within the focus trap.
	 */
	children?: React.ReactNode;
};

export function FocusTrap<T>({active = false, children}: Props<T>) {
	return (
		<FocusScope>
			<div>
				{active ? (
					<span
						aria-hidden="true"
						data-focus-scope-start="true"
						tabIndex={0}
					/>
				) : null}
				{children}
				{active ? (
					<span
						aria-hidden="true"
						data-focus-scope-end="true"
						tabIndex={0}
					/>
				) : null}
			</div>
		</FocusScope>
	);
}
