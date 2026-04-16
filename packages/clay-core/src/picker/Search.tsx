/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {InternalDispatch, Keys} from '@clayui/shared';
import React from 'react';

type Props = {
	activeDescendant: React.Key;
	ariaControls: string;
	getOptions: () => Array<HTMLElement>;
	onActiveChange: InternalDispatch<boolean>;
	onChange: InternalDispatch<string>;
	onKeyDown: InternalDispatch<React.KeyboardEvent<HTMLElement>>;
	onMoveFocus: (
		key: 'PageUp' | 'PageDown',
		position: number,
		list: Array<HTMLElement> | Array<React.Key>
	) => void;
	onPress: () => void;
	placeholder: string;
	triggerRef: React.RefObject<HTMLButtonElement | null>;
	value: string;
};

export const Search = React.forwardRef<HTMLInputElement, Props>(function Search(
	{
		activeDescendant,
		ariaControls,
		getOptions,
		onActiveChange,
		onChange,
		onKeyDown: externalOnKeyDown,
		onMoveFocus,
		onPress,
		placeholder,
		triggerRef,
		value,
	},
	ref
) {
	function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === Keys.Enter) {
			event.preventDefault();
			event.stopPropagation();
			onPress();

			return;
		}

		if (event.key === Keys.Esc) {
			event.preventDefault();
			event.stopPropagation();
			onActiveChange(false);
			triggerRef.current?.focus();

			return;
		}

		if (event.key === 'PageUp' || event.key === 'PageDown') {
			event.preventDefault();

			const list = getOptions();

			onMoveFocus(
				event.key,
				list.findIndex(
					(element) =>
						element instanceof HTMLElement &&
						element.getAttribute('id') === String(activeDescendant)
				),
				list
			);

			return;
		}

		externalOnKeyDown(event as React.KeyboardEvent<HTMLElement>);
	}

	return (
		<div className="pb-2 pt-3 px-3">
			<ClayInput.Group small>
				<ClayInput.GroupItem className="input-group-item-focusable">
					<ClayInput
						aria-activedescendant={
							activeDescendant
								? String(activeDescendant)
								: undefined
						}
						aria-autocomplete="list"
						aria-controls={ariaControls}
						aria-label={placeholder}
						insetAfter
						onChange={(event) => onChange(event.target.value)}
						onKeyDown={onKeyDown}
						placeholder={placeholder}
						ref={ref}
						type="text"
						value={value}
					/>

					<ClayInput.GroupInsetItem after tag="span">
						<ClayIcon symbol="search" />
					</ClayInput.GroupInsetItem>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</div>
	);
});
