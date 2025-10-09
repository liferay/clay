/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useMemo, useRef} from 'react';

type PointerType = 'mouse' | 'pen' | 'touch';

type Event = {
	type: string;
	target: HTMLElement;
	pointerType: PointerType;
};

type Props = {
	disabled?: boolean;
	onHover: (event: Event) => void;
};

type State = {
	isEmulatedMouseEvents: boolean;
	isHovered: boolean;
	pointerType?: PointerType;
	target: HTMLElement | null;
};

// Handles pointer hover interactions for an element.
// Adapted from https://github.com/adobe/react-spectrum/blob/0182ad0748bcdddf7eb010540c453f9a35a7c753/packages/%40react-aria/interactions/src/useHover.ts
export function useHover<T extends HTMLElement>({disabled, onHover}: Props) {
	const state = useRef<State>({
		isEmulatedMouseEvents: false,
		isHovered: false,
		pointerType: undefined,
		target: null,
	}).current;

	return useMemo(() => {
		const props: React.DOMAttributes<T> = {};

		const onStart = (
			event: React.SyntheticEvent<HTMLElement>,
			pointerType: PointerType
		) => {
			if (
				disabled ||
				pointerType === 'touch' ||
				state.isHovered ||
				!event.currentTarget.contains(event.target as HTMLElement)
			) {
				return;
			}

			state.isHovered = true;
			const target = event.currentTarget;
			state.target = target as HTMLElement;

			onHover({
				pointerType,
				target,
				type: 'hoverstart',
			});
		};

		const onEnd = (pointerType: PointerType) => {
			state.pointerType = undefined;
			state.target = null;

			if (pointerType === 'touch' || !state.isHovered) {
				return;
			}

			state.isHovered = false;
		};

		if (typeof PointerEvent !== 'undefined') {
			props.onPointerEnter = (event) => {
				onStart(event, event.pointerType);
			};

			props.onPointerLeave = (event) => {
				if (
					!disabled &&
					event.currentTarget.contains(event.target as Element)
				) {
					onEnd(event.pointerType);
				}
			};
		} else {
			props.onTouchStart = () => {
				state.isEmulatedMouseEvents = true;
			};

			props.onMouseEnter = (event) => {
				if (!state.isEmulatedMouseEvents) {
					onStart(event, 'mouse');
				}

				state.isEmulatedMouseEvents = false;
			};

			props.onMouseLeave = (event) => {
				if (
					!disabled &&
					event.currentTarget.contains(event.target as Element)
				) {
					onEnd('mouse');
				}
			};
		}

		return props;
	}, [onHover]);
}
