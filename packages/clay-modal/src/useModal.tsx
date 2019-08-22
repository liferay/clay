/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ObserverType} from './types';
import {useEffect, useRef, useState} from 'react';

interface IProps {
	/**
	 * Callback called to close the modal.
	 */
	onClose?: () => void;
}

const delay = (fn: Function) => {
	return setTimeout(() => {
		fn();
	}, 100);
};

const modalOpenClassName = 'modal-open';

export const useModal = ({onClose = () => {}}: IProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	const timerIdRef = useRef<NodeJS.Timeout | null>(null);

	/**
	 * Control the close of the modal to create the component's "unmount"
	 * animation and call the onClose prop with delay.
	 */
	const handleCloseModal = () => {
		document.body.classList.remove(modalOpenClassName);
		setVisible(false);
		timerIdRef.current = delay(onClose);
	};

	const handleOpenModal = () => {
		document.body.classList.add(modalOpenClassName);
		timerIdRef.current = delay(() => setVisible(true));
	};

	const handleObserverDispatch = (type: ObserverType) => {
		switch (type) {
			case ObserverType.Close:
				handleCloseModal();
				break;
			case ObserverType.Open:
				handleOpenModal();
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		return () => {
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
	};
};
