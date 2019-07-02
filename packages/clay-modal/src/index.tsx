/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Body from './Body';
import classNames from 'classnames';
import Context, {IContext} from './Context';
import Footer from './Footer';
import Header from './Header';
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {ClayPortal} from '@clayui/shared';
import {Size} from './types';
import {useUserInteractions} from './Hook';

interface IProps extends React.HTMLAttributes<HTMLDivElement>, IContext {
	children?: (onClose: () => void) => React.ReactNode;

	/**
	 * The size of element modal.
	 */
	size?: Size;
}

const delay = (fn: Function) => {
	return setTimeout(() => {
		fn();
	}, 100);
};

const modalOpenClassName = 'modal-open';

const ClayModal: FunctionComponent<IProps> & {
	Body: typeof Body;
	Footer: typeof Footer;
	Header: typeof Header;
} = ({
	children,
	className,
	onClose = () => {},
	size,
	spritemap,
	status,
	...otherProps
}: IProps) => {
	const [visibleClassShow, setVisibleClassShow] = useState<boolean>(false);

	const modalDialogElementRef = useRef<HTMLDivElement | null>(null);

	/**
	 * Control the close of the modal to create the component's "unmount"
	 * animation and call the onClose prop with delay.
	 */
	const handleCloseModal = () => {
		document.body.classList.remove(modalOpenClassName);
		setVisibleClassShow(false);

		delay(onClose);
	};

	const context = {
		onClose: handleCloseModal,
		spritemap,
		status,
	};

	useUserInteractions(modalDialogElementRef, handleCloseModal);

	useEffect(() => {
		document.body.classList.add(modalOpenClassName);
		const timer = delay(() => {
			setVisibleClassShow(true);
		});

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<ClayPortal>
			<div
				className={classNames('modal-backdrop fade', {
					show: visibleClassShow,
				})}
			/>
			<div
				{...otherProps}
				className={classNames('fade modal d-block', className, {
					show: visibleClassShow,
				})}
			>
				<div
					className={classNames('modal-dialog', {
						[`modal-${size}`]: size,
						[`modal-${status}`]: status,
					})}
					ref={modalDialogElementRef}
					tabIndex={-1}
				>
					<div className="modal-content">
						<Context.Provider value={context}>
							{children && typeof children === 'function'
								? children(handleCloseModal)
								: children}
						</Context.Provider>
					</div>
				</div>
			</div>
		</ClayPortal>
	);
};

ClayModal.Body = Body;
ClayModal.Footer = Footer;
ClayModal.Header = Header;

export default ClayModal;
