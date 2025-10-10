/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useCallback, useEffect, useRef, useState} from 'react';

import {Observer, ObserverType} from './types';

type Props = {
	/**
	 * Set the default value of the state of the modal dialog.
	 */
	defaultOpen?: boolean;

	/**
	 * Callback called to close the modal.
	 * @deprecated since v3.52.0 - use the `open` and `onOpenChange` properties
	 * of the hook return and remove its state.
	 */
	onClose?: () => void;
};

type Return = {
	/**
	 * Observer is an internal property that must be connected to the <ClayModal /> component.
	 */
	observer: Observer;

	/**
	 * Callback to close the modal, aliased to `onOpenChange` callback.
	 */
	onClose: () => void;

	/**
	 * Callback to change open state.
	 */
	onOpenChange: (value: boolean) => void;

	/**
	 * Sets the open state of the modal.
	 */
	open: boolean;
};

const delay = (fn: Function) => {
	return setTimeout(() => {
		fn();
	}, 100);
};

const modalOpenClassName = 'modal-open';

export const useModal = ({
	defaultOpen = false,
	onClose,
}: Props = {}): Return => {
	const [open, setOpen] = useState(defaultOpen);

	const [visible, setVisible] = useState<[boolean, boolean]>([false, false]);
	const timerIdRef = useRef<NodeJS.Timeout | null>(null);

	const restoreTriggerRef = useRef<HTMLElement | null>(null);

	/**
	 * Control the close of the modal to create the component's "unmount"
	 * animation and call the onClose prop with delay.
	 */
	const handleCloseModal = () => {
		document.body.classList.remove(modalOpenClassName);
		setVisible([false, true]);

		timerIdRef.current = delay(() => {
			if (onClose) {
				onClose();
			}

			if (restoreTriggerRef.current) {
				restoreTriggerRef.current.focus();
				restoreTriggerRef.current = null;
			}

			setOpen(false);
			setVisible([false, false]);
		});
	};

	const handleOpenModal = () => {
		document.body.classList.add(modalOpenClassName);
		setOpen(true);
		timerIdRef.current = delay(() => setVisible([true, true]));
	};

	const handleObserverDispatch = (
		type: ObserverType,
		payload: HTMLElement
	) => {
		switch (type) {
			case ObserverType.Close:
				handleCloseModal();
				break;
			case ObserverType.Open:
				handleOpenModal();
				break;
			case ObserverType.RestoreFocus:
				restoreTriggerRef.current = payload;
				break;
			default:
				break;
		}
	};

	const onOpenChange = useCallback((value: boolean) => {
		if (value) {
			handleOpenModal();
		} else {
			handleCloseModal();
		}
	}, []);

	useEffect(() => {
		return () => {
			document.body.classList.remove(modalOpenClassName);

			if (timerIdRef.current) {
				clearTimeout(timerIdRef.current);
			}
		};
	}, []);

	return {
		observer: {
			dispatch: handleObserverDispatch,
			mutation: visible,
		},
		onClose: handleCloseModal,
		onOpenChange,
		open,
	};
};
